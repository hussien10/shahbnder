import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products:Array<Product>=[]
  categories:Array<string>=[]
  loading:boolean=true;
  sort:string="desc"
  constructor(private allProducts:ProductService , private toastr: ToastrService){

  }
  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategories()
  }
  getAllProducts(){
    this.loading=true
    this.allProducts.getAllProducts().subscribe((res:Product | any)=>{
      this.products=res;
      this.loading=false
      this.toastr.success("products loaded successfully")
    },err=>{
      this.toastr.error(err.message)
    })
  }
  getAllCategories(){
    this.allProducts.getAllCategories().subscribe((res:Array<string> | any)=>{
      this.categories=res;
    },err=>{
      this.toastr.error(err.message)
    })
  }

  filterProducts(event:any){
    this.loading=true
    var category=event.target.value;
    this.allProducts.filterProducts(category).subscribe((res:Product | any)=>{
      this.loading=false
      this.products=res;
      this.toastr.success("products loaded successfully")
    },err=>{
      this.toastr.error(err.message)
    })
  }
  sortProducts(){
    this.sortType()
    this.loading=true
    this.allProducts.sortProducts(this.sort).subscribe((res:Product |any)=>{
      this.products=res
      this.loading=false
      this.toastr.success("products Sorted successfully")
      console.log(this.products)
    },err=>{
      this.toastr.error(err.message)
    })
  }
  sortType(){
    if(this.sort=="desc"){
      this.sort="asc"
    }else{
      this.sort="desc"
    }
  }
}
