import { Component } from '@angular/core';
import {ProductService } from "../../services/project.services";
import {FilterDetails} from './../../pipes/credicarPipe'
@Component({
selector: 'orderAndPayment',
templateUrl:'./orderAndPayment.component.html',
styleUrls:['./orderAndPayment.component.css'],
providers:[ProductService]
})
export class orderAndPayment{
  creditCardList;
  submitAddress:boolean=false;
  checked: boolean=true;
  dialogFormGroup: any;
  ccNumber;
  emNumber;
  eyNumber;
  select;


  constructor( private productService:ProductService){
    this.getCreditCardNumber();
  }
  onSubmit(order:any){
    this.submitAddress=true;
      console.log('order:',order );
  }
  handleRemember(  creditCardObj)
  {
    
    let creditCard={
      creditCardNumber: this.ccNumber,
      validTo:`${this.emNumber}/${this.eyNumber}`
    }
    console.log(creditCard);
    
    this.productService.addCreditCard(creditCard,"q@123").subscribe( reaponse =>console.log(reaponse));
  }
  onSubmitForPayment(payment:any){
    console.log(payment);
  }

  getCreditCardNumber(){
    this.productService.getAllCreditCardOfUser("a@123").subscribe(reaponse =>{console.log(reaponse) ;this.creditCardList=reaponse});
      
  }
  handleClick(creditCardObj){
    let cc:string = creditCardObj.creditCardNumber;
    console.log(cc);
  
    this.ccNumber= String(cc).substr(0,4);
    let split=String(creditCardObj.validTo).split("/");
    this.emNumber=split[0];
    this.eyNumber=split[1];
  }

}