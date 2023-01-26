import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './composants/products/products.component';
import { HomeComponent } from './composants/home/home.component';
import { CustomerComponent } from './composants/customer/customer.component';
import { AddProductComponent } from './composants/add-product/add-product.component';
import { EditProductComponent } from './composants/edit-product/edit-product.component';
const routes: Routes = [
  {
    path:"products",component :ProductsComponent
  },
  {
    path:"",component :HomeComponent
  },
  {
    path:"customers",component :CustomerComponent
  },
  {
    path:"newProduct",component :AddProductComponent
  },
  {
    path:"editProduct/:id",component :EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
