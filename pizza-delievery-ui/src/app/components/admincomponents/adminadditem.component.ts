import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/project.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotifierService } from "angular-notifier";
@Component({
    selector: 'app-adminadditem',
    templateUrl: './adminadditem.component.html',
    styleUrls: ['./adminadditem.component.css'],
    providers: [ProductService]
})
export class AdminAddItemComponent {
name;
type;
size;
quantity;
price;
sessionId="aasDD";
constructor(private productService: ProductService,private route:Router,private notify:NotifierService)
{

}

onClickFood()
{
  
  let newItem:Object={
    "foodName":this.name,
    "foodType":this.type,
    "foodSize":this.size,
    "quantity":this.quantity,
    "price":this.price,

  }
    console.log(newItem);
    this.productService.addFoodProducts(newItem,sessionStorage.getItem("sessionId")).subscribe(
        (response)=>{console.log(response)}
    );
    this.notify.notify("info","Food Item added succesfully");
    this.route.navigateByUrl("/adminhome/adminadditem");

}}
