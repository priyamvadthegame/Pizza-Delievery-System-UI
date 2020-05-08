import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/project.services'
@Component({
selector: 'viewstore',
templateUrl: './Storeview.html',
styleUrls: ['./Storeview.css'],
})
export class StoreViewComponent implements OnInit {

  foodList
  
  constructor(private service:ProductService)
  {

  }

  ngOnInit()
  {
    this.service.getAllStore().subscribe((result)=>this.foodList=result)
  }

}