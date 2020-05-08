import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/project.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotifierService } from "angular-notifier";
@Component({
    selector: 'app-admindeleteitem',
    templateUrl: './admindeleteitem.component.html',
    styleUrls: ['./admindeleteitem.component.css'],
    providers: [ProductService]
})
export class AdminDeleteItemComponent {
id: String;
constructor(private productService: ProductService,private route:Router,private notify:NotifierService)
{

}

onClickDeleteItem()
{
    console.log(this.id);
    this.productService.deleteFoodProducts(this.id,sessionStorage.getItem("sessionId")).subscribe(
        (response)=>{console.log(response)}
    );
    this.notify.notify("info","Deleted food Item  succesfully");
    this.route.navigateByUrl("/adminhome/admindelitem");
}}