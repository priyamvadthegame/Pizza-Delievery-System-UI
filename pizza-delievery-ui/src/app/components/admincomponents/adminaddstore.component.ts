import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/project.services';
import {FormsModule} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotifierService } from "angular-notifier";
@Component({
    selector: 'app-adminaddstore',
    templateUrl: './adminaddstore.component.html',
    styleUrls: ['./adminaddstore.component.css'],
    providers: [ProductService]
})
export class AdminAddStoreComponent {
name;
street;
mob;
city;
state;
pincode;
constructor(private productService: ProductService,private route:Router,private notify:NotifierService)
{

}

clickSend()
{
  
  let newStore:Object={
    "storeName":this.name,
    "storeCity":this.city,
    "storePincode":this.pincode,
    "storeState":this.state,
    "storeStreet":this.street,
    "storeMobileNo":this.mob

  }
    console.log(newStore);
    this.productService.registerStore(newStore).subscribe(
        (response)=>{console.log(response)}
    );
    this.notify.notify("info","Store Item added succesfully");
    this.route.navigateByUrl("/adminhome/adminaddstore");

}}
