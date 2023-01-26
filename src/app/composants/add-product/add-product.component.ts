import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
formGroup:FormGroup;
submitted:boolean=false;
constructor(private fb: FormBuilder,private serviceProduct:ProductService){
  this.formGroup=new FormGroup({});
  this.formGroup=this.fb.group({
    name:["",Validators.required],
    price:[0,Validators.required],
    quantity:[0,Validators.required],
    selected:[true,Validators.required],
    available:[true,Validators.required]});
}
ngOnInit(): void {

}
onSaveProduct(){
  this.submitted=true;
  if(this.formGroup.invalid)return;
  this.serviceProduct.save(this.formGroup.value).subscribe
  (data=>{alert("product added successfully");});

}
}
