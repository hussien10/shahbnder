import { ProdcutDetailsComponent } from './products/components/prodcut-details/prodcut-details.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';

const routes: Routes = [
  // {path:"",component:AllProductsComponent}
  {path:"products",component:AllProductsComponent},
  {path:"product-details/:id",component:ProdcutDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"",redirectTo:"products",pathMatch:"full"},
  {path:"**",redirectTo:"products",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
