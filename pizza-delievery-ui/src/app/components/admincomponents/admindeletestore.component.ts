import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/project.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotifierService } from "angular-notifier";

@Component({
    selector: 'app-admindeletestore',
    templateUrl: './admindeletestore.component.html',
    styleUrls: ['./admindeletestore.component.css'],
    providers: [ProductService]
})
export class AdminDeleteStoreComponent {
id: String;
constructor(private productService: ProductService,private route:Router,private notify:NotifierService)
{

}

onClick()
{
    console.log(this.id);
    this.productService.deleteStore(this.id).subscribe(
        (response)=>{console.log(response)}
    );
    this.notify.notify("info","Deleted store  succesfully");
    this.route.navigateByUrl("/adminhome/admindelstore");
}}