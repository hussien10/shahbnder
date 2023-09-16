import { Product } from './../../interfaces/product';
import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prodcut-details',
  templateUrl: './prodcut-details.component.html',
  styleUrls: ['./prodcut-details.component.css']
})
export class ProdcutDetailsComponent {
  constructor(private productService:ProductService,private ActivatedRoute:ActivatedRoute , private toastr: ToastrService){
    var id=this.ActivatedRoute.snapshot.params["id"]
    this.getProductDetails(id)
  }
  Product!:Product
  getProductDetails(id:string){
    this.productService.getSingleProduct(id).subscribe((res:any)=>{
      this.Product=res
      this.toastr.success("product Loaded Successfully")
    },err=>{
      this.toastr.error(err.message)
    })
  }
}
