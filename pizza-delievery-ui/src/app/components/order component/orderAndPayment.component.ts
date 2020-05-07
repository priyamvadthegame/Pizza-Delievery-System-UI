import { Component } from '@angular/core';
import {ProductService } from "../../services/project.services";
@Component({
selector: 'order',
templateUrl:'./orderAndPayment.component.html',
styleUrls:['./orderAndPayment.component.css'],
providers:[ProductService]
})
export class OrderComponent{
  constructor( private productService:ProductService){

  }
  onSubmit(order:any){

      console.log('order:',order );
  }

  onSubmitForPayment(payment:any){
    let creditCard={
      creditCardNumber:payment.cardNumber,
      validFrom:`${payment.ExpiryMonth}/${payment.ExpiryYear}`
    }
  this.productService.addCreditCard(creditCard,"we").subscribe( reaponse =>console.log(reaponse));
    console.log(payment);
    
   }


 }