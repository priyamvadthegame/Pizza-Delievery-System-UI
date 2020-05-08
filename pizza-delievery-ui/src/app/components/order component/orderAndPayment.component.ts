import { Component, OnInit } from '@angular/core';
import {ProductService } from "../../services/project.services";
import { NotifierService } from "angular-notifier";
import { ActivatedRoute, Router } from '@angular/router'
@Component({
selector: 'orderAndPayment',
templateUrl:'./orderAndPayment.component.html',
styleUrls:['./orderAndPayment.component.css'],
providers:[ProductService]
})
export class orderAndPayment implements OnInit{
  creditCardList;
  submitAddress:boolean=false;
  checked: boolean=true;
  dialogFormGroup: any;
  ccNumber;
  emNumber;
  eyNumber;
  select;
  totalPrice;
  rememberMe=false;
  OrderDetails
  constructor( private productService:ProductService,private route:ActivatedRoute,private notifier:NotifierService,private router:Router){
    this.getCreditCardNumber();
  }
  onSubmit(order:any){
    this.submitAddress=true;
    this.OrderDetails=order;
      console.log('order:',order );
  }
  handleRemember(creditCardObj)
  {
    this.rememberMe=!this.rememberMe;
    
  }
  onSubmitForPayment(payment:any){
    console.log()
    console.log(this.ccNumber)
    if(this.rememberMe===false)
    {
        const index=this.creditCardList.findIndex(credit=>String(credit.creditCardNumber)===String(this.ccNumber))
      console.log(index)
        if(index===-1)  
        {
          this.notifier.notify("error","Incorect credit card number");
          return;
        }
        else{
        let foodArray:Array<string>=[];
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let cartlist=JSON.parse(localStorage.getItem("cartList"));
        if(key!="cartList")
        {  const index = cartlist.findIndex(cart=> cart.name===key);
          console.log(index)
          foodArray.push(cartlist[index].foodId);
        }
      
      }
      let Order={ orderStatus:"Pending",
    
      Street:this.OrderDetails.Street,
      
      city:this.OrderDetails.City,
      
      state:this.OrderDetails.State,
      
      pincode:this.OrderDetails.Pincode,
      
      mobileNo:Number(this.OrderDetails.MobileNumber)
      }
    this.productService.placeOrder(sessionStorage.getItem("sessionId"),Order,foodArray,this.totalPrice).subscribe(result=>{console.log(result); 
      let jsonfile=JSON.parse(JSON.stringify(result));
      if((jsonfile.city)==="")
      {
        this.notifier.notify("info", jsonfile.orderStatus);
      }
      else{
        this.notifier.notify("success","Order Placed Successfully");
        this.emptyLocalStorage();
        this.router.navigateByUrl("/homepage");
         
      }
      
    })
  }
} 
    else{
      let creditCard={
        creditCardNumber: this.ccNumber,
        validTo:`${this.emNumber}/${this.eyNumber}`,
          balance:5000
      };
  
      this.productService.addCreditCard(creditCard,sessionStorage.getItem("sessionId")).subscribe( reaponse =>console.log(reaponse));
      let foodArray:Array<string>=[];
      for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let cartlist=JSON.parse(localStorage.getItem("cartList"));
        if(key!="cartList")
        {  const index = cartlist.findIndex(cart=> cart.name===key);
          console.log(index)
          foodArray.push(cartlist[index].foodId);
        }
      
      }
      let Order={ orderStatus:"Pending",
    
      Street:this.OrderDetails.Street,
      
      city:this.OrderDetails.City,
      
      state:this.OrderDetails.State,
      
      pincode:this.OrderDetails.Pincode,
      
      mobileNo:Number(this.OrderDetails.MobileNumber)
      }
    this.productService.placeOrder(sessionStorage.getItem("sessionId"),Order,foodArray,this.totalPrice).subscribe(result=>{console.log(result); 
      let jsonfile=JSON.parse(JSON.stringify(result));
      if((jsonfile.city)==="")
      {
        this.notifier.notify("info", jsonfile.orderStatus);
      }
      else{
        this.notifier.notify("success","Order Placed Successfully");
        this.emptyLocalStorage()
        this.router.navigateByUrl("/homepage");
      }
     });


    }

  }


  emptyLocalStorage()
  {
    localStorage.clear();
    
  }

  getCreditCardNumber(){
    this.productService.getAllCreditCardOfUser(sessionStorage.getItem("sessionId")).subscribe(reaponse =>{console.log(reaponse) ;this.creditCardList=reaponse});
      
  }
  handleClick(creditCardObj){
    let cc:string = creditCardObj.creditCardNumber;
    console.log(cc);
  
    this.ccNumber= String(cc).substr(0,4);
    let split=String(creditCardObj.validTo).split("/");
    this.emNumber=split[0];
    this.eyNumber=split[1];
  }
  ngOnInit()
  {
   this.route.params.subscribe(params => {
      this.params(params['price'])
      });
  }
  params(value)
  {
      this.totalPrice=value
  }

}