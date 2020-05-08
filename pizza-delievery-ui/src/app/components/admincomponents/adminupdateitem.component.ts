import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/project.services';

import { NotifierService } from "angular-notifier";
@Component({
    selector: 'app-adminupdateitem',
    templateUrl: './adminupdateitem.component.html',
    styleUrls: ['./adminupdateitem.component.css'],
    providers: [ProductService]
})
export class AdminUpdateItemComponent {
id;
name;
type;
size;
quantity;
price;
sessionId="aasDD";
constructor(private productService: ProductService,private notifier:NotifierService)
{

}

onClickUpdateItem()
{
  console.log('Hello');
  let newItem:Object={
    "id":this.id,
    "foodName":this.name,
    "foodType":this.type,
    "foodSize":this.size,
    "quantity":this.quantity,
    "price":this.price,

  }
    console.log(newItem);
    this.productService.updateFoodProducts(this.id,newItem).subscribe(
        (response)=>{console.log(response)
        this.notifier.notify("info","Item Updated Succesfully");
        });
    

}}
