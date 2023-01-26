import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './composants/nav-bar/nav-bar.component';
import { ProductsComponent } from './composants/products/products.component';
import { HomeComponent } from './composants/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './composants/customer/customer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './composants/add-product/add-product.component';
import { EditProductComponent } from './composants/edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    CustomerComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
