import { Component, OnInit,ViewEncapsulation,EventEmitter, Output  } from '@angular/core';
import {ProductService} from '../services/project.services'
import {Cart} from '../pojo classes/cartPojo'
import {Store} from '../pojo classes/store'
import { NotifierService } from "angular-notifier";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  public storeList:Object;
  public cartList:Array<Cart>=[];
  public storeArray:Array<Store>=[];
  public show=false;
  constructor(private productService:ProductService,private notifierService: NotifierService,private rout:Router)
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
       //productService.placeOrder("a@123",{status:"confirmed"}).subscribe(response=>console.log(response));
  }

  addtocart(food)
{ 
  
  if(sessionStorage.length>1)
  {
      console.log(food)
          if(localStorage.length>0)
          { 
          let cartlist=JSON.parse(localStorage.getItem("cartList"));
          const index = cartlist.findIndex(cart=> cart.foodId ===food.id);
            if (index >-1) {
              
              this.notifierService.notify("info", "Item Already Added to cart");
          }
          else{
            
            cartlist.push(new Cart(food.foodName,food.id,1,food.price));
            for(let store in this.storeList)
            {
                this.storeArray.push(new Store(this.storeList[store].storeName,this.storeList[store].storeId,this.storeList[store].storeStreet))
            }
            localStorage.setItem("cartList",JSON.stringify(cartlist));
            localStorage.setItem(food.foodName,JSON.stringify(this.storeArray))
            this.notifierService.notify("success", "Item Added to Cart");
          }
        }
      else{
      
        this.cartList.push(new Cart(food.foodName,food.id,1,food.price));
        for(let store in this.storeList)
          {
              this.storeArray.push(new Store(this.storeList[store].storeName,this.storeList[store].storeId,this.storeList[store].storeStreet))
          }
        localStorage.setItem("cartList",JSON.stringify(this.cartList));
        localStorage.setItem(food.foodName,JSON.stringify(this.storeArray))
        this.notifierService.notify("success", "Item Added to Cart");
        }
      }
    
    else
    {
      this.notifierService.notify("info", "Please Login to continue");
    }
  }
    getStoresOfAParticularFood(food)
    { 
    
      this.productService.filterStoreByFood(food.id).subscribe((store)=>{this.storeList=store
        this.addtocart(food);
      });
      
    }
  

  ngOnInit()
   {   
            
      this.productService.getFoodProducts().subscribe((foodList)=>{this.foodList=foodList
        console.log(foodList);
      })
      
    }
}

