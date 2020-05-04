import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import {ProductService} from '../services/project.services'
import {Cart} from '../pojo classes/cartPojo'
@Component({
  selector: 'test',
  templateUrl: `app.dynamicfoodcontents.html`,
  styleUrls: [`app.dynamicfoodcontents.css`],
  providers: [ProductService],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  title = 'pizza-delievery-ui';
  public testData;
  public foodList:Object;
  public cartList:Array<Cart>=[];
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
  }

  addtocart(food)
  { 
    if(localStorage.length>0)
    {
      let cartlist=JSON.parse(localStorage.getItem("cartList"));
      const index = cartlist.findIndex(cart=> cart.foodId ===food.id);
        if (index >-1) {
      cartlist[index].quantity=cartlist[index].quantity+1;
      cartlist[index].price=cartlist[index].price*2;
      localStorage.setItem("cartList",JSON.stringify(cartlist));
      }
      else{
        cartlist.push(new Cart(food.id,1,food.price));
        localStorage.setItem("cartList",JSON.stringify(cartlist));
      }
    }
    else{
      this.cartList.push(new Cart(food.id,1,food.price));
        localStorage.setItem("cartList",JSON.stringify(this.cartList));
      }
    }

  

  ngOnInit()
  {
      this.productService.getFoodProducts().subscribe((foodList)=>{this.foodList=foodList
        console.log(foodList);
      })
     
      
  }
}

