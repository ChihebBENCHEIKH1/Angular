import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/products.model';
import { ProductService } from 'src/app/service/products.service';
import * as allOp from 'rxjs/operators';
import { AppData, DataState } from 'src/app/state/product.state';
import { of } from 'rxjs';
import { Data, Route, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  isClicked:boolean=false;
  isClicked1:boolean=false;
  isClicked2:boolean=false;
  products$:Observable<AppData<Product[]>>|null=null;
  readonly dataState=DataState;//te5dem hakka ki tebda 7achtek bl classe fl html
  constructor(private  productService:ProductService,private router:Router){}
  onGetAll()
  {
    this.products$=this.productService.getAllProducts().pipe
    (allOp.map(data=>({state :DataState.LOADED,data:data})),
    allOp.startWith({state :DataState.LOADING}),
    allOp.catchError(err=>of({state: DataState.ERROR,eroorMessage:err.message}))
    );
  }
  onGetAvailable(){
    this.products$=this.productService.getAvailableProducts().pipe
    (allOp.map(data=>({state :DataState.LOADED,data:data})),
    allOp.startWith({state :DataState.LOADING}),
    allOp.catchError(err=>of({state: DataState.ERROR,eroorMessage:err.message}))
    );
  }
  onGetSelected(){
    this.products$=this.productService.getSelectedProducts().pipe
    (allOp.map(data=>({state :DataState.LOADED,data:data})),
    allOp.startWith({state :DataState.LOADING}),
    allOp.catchError(err=>of({state: DataState.ERROR,eroorMessage:err.message}))
    );
  }
  onSelect(product:Product){
    this.productService.onSelect(product).subscribe
    (data=>{
      product.selected=data.selected;
    });
  }
  onSearch(dataForm:any){
    this.products$=this.productService.search(dataForm.keyword).pipe
    (allOp.map(data=>({state :DataState.LOADED,data:data})),
    allOp.startWith({state :DataState.LOADING}),
    allOp.catchError(err=>of({state: DataState.ERROR,eroorMessage:err.message}))
    );
  }
  onDelete(id:number){
    let v=confirm('etes vous sure?');
    if(v)
    this.productService.delete(id).subscribe
    (data=>{
      this.onGetAll();
    })
  }
  goToNewProduct(){
    this.router.navigateByUrl('/newProduct');
  }
  editProduct(id:number){
    this.router.navigateByUrl('/editProduct/'+id);
  }
}
