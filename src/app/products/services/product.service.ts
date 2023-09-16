import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from 'src/enviroments/enviroment';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  api = enviroment.apiUrl;
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(`${this.api}/products`);
  }
  getAllCategories() {
    return this.http.get(`${this.api}/products/categories`);
  }
  filterProducts(e: string) {
    if (e == 'all') {
      return this.http.get(`${this.api}/products`);
    } else {
      return this.http.get(`${this.api}/products/category/${e}`);
    }
  }
  getSingleProduct(id:string){
    return this.http.get(`${this.api}/products/${id}`)
  }
  sortProducts(sort:string){
    return this.http.get(`${this.api}/products?sort=${sort}`)
  }
}
