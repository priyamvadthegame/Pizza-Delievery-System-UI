import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/project.services'
@Component({
selector: 'table-bordered',
templateUrl: './foodview.html',
styleUrls: ['./foodview.css'],
})
export class TableBorderedComponent implements OnInit {

  foodList
  headElements = ['FoodName', 'FoodType','Quantity', 'Size','price'];
  constructor(private service:ProductService)
  {

  }

  ngOnInit()
  {
    this.service.getFoodProducts().subscribe((result)=>this.foodList=result)
  }

}