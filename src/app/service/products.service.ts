import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/products.model";
import { environment } from "src/environments/environment";


@Injectable({providedIn:"root"})
export class ProductService{
  host=environment.HOST;
  constructor(private http:HttpClient){}
  getAllProducts () :Observable<Product[]>
  {
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
  getAvailableProducts () :Observable<Product[]>
  {
    return this.http.get<Product[]>("http://localhost:3000/products?available=true");
  }
  getSelectedProducts () :Observable<Product[]>
  {
    return this.http.get<Product[]>("http://localhost:3000/products?selected=true");
  }
  setAvailable()
  {

  }
  search(keyword:string){
    return this.http.get<Product[]>("http://localhost:3000/products?name_like="+keyword);
  }
  onSelect(product:Product):Observable<Product>{
    product.selected=!product.selected;
    return this.http.put<Product>(this.host+"/products/"+product.id,product);
  }
  delete(id:number):Observable<void>{
    return this.http.delete<void>(this.host+"/products/"+id);
  }
  save(product:Product):Observable<void>{
    return this.http.post<void>(this.host+"/products",product);
  }
  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(this.host+"/products/"+id);
  }
  UpdateProduct(product:Product):Observable<Product>{
    return this.http.put<Product>(this.host+"/products/"+product.id,product);
  }
}
