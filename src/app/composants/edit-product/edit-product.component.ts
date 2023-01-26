import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from 'src/app/service/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  id:number;
  formGroup!: FormGroup;
  constructor(private productService:ProductService,private fb:FormBuilder,private router:Router,private route:ActivatedRoute){
    this.id=this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe
    (data=>{
      this.formGroup=this.fb.group({
        id:[data.id,Validators.required],
        name:[data.name,Validators.required],
        price:[data.price,Validators.required],
        quantity:[data.quantity,Validators.required],
        selected:[data.selected,Validators.required],
        available:[data.available,Validators.required],
      })
    })
  }
  ngOnInit():void{

  }
  onEditProduct():void{
    this.productService.UpdateProduct(this.formGroup.value)
    .subscribe(
      data=>{
        this.router.navigateByUrl('/products');
      }
    );

  }
}
