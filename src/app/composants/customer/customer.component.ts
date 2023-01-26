import { HttpClient } from '@angular/common/http';
import { Component, Host } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})



export class CustomerComponent {

  constructor(private customerService:CustomerService){}
  customers$:Observable<Customer[]>|null=null;
  getall(){
    this.customers$=this.customerService.getCustomers();
  }
}
interface Customer{
  id:number,
  name:string,
  mail:string
}
@Injectable({providedIn:"root"})
class CustomerService{
  constructor(private http:HttpClient){}
  getCustomers():Observable<Customer[]>
  {
    let host=environment.HOST;
    return this.http.get<Customer[]>('https://cors-proxy.github.io' + '/localhost:8881/customers');
  };
  }

