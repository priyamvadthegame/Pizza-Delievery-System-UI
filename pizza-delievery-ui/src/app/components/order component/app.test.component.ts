import { Component } from '@angular/core';
import {ProductService} from '../services/project.services'
@Component({
  selector: 'test',
  template: '<h1>{{testData | async | json}}</h1>',
  providers: [ProductService]
})
export class TestComponent {
  title = 'pizza-delievery-ui';
  public testData;
  constructor(private productService:ProductService)
  {   /*
      this.testData=productService.addCreditCard({creditCardNumber:20331052563,
        validFrom:"04/30",
        validTo: "0520",
        balance:50000},"a@123");
        */
         /* 
        this.testData=productService.verifyCreditCard("a@123","20331525897");
         */
        /*
        this.testData=productService.deleteCreditCardDetailsOfUser("a@123","20331052563");
        */
       //this.testData=productService.getAllCreditCardOfUser("a@123");

       //orderTesting
  }
}
