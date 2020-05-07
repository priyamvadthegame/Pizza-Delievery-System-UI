import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/project.services';
import {FormsModule} from '@angular/forms';
import {Cart} from '../pojo classes/cartPojo'


@Component({
  selector: 'cart',
  templateUrl: 'app.cart.component.html'
 
})
export class CartComponent implements OnInit {
  title = 'pizza-delievery-ui';
  food:Array<Cart>=[];
  //cartList: Array<Cart> = [];
  quant:string;
  total:number=0;
  constructor(private productService:ProductService) {
  }
 
  handleClick(food,i) {
      
      this.total=0;
      let cartlist=JSON.parse(localStorage.getItem("cartList"));
      cartlist[i].quantity=Number(this.quant);
      cartlist[i].subtotal=cartlist[i].price * Number(this.quant) ;
      cartlist[i].total=cartlist[i].total + cartlist[i].subtotal;
      localStorage.setItem("cartList",JSON.stringify(cartlist));
      this.food=JSON.parse(localStorage.getItem("cartList") );
      this.food.forEach(foods=>this.total=this.total+foods.price*foods.quantity);
    
    
    // else{
    //   if(this.quant==undefined)
    //   {
    //     this.quant="1";
    //   }
    //   this.cartList.push(new Cart(food.id,Number(this.quant),food.price  * Number(this.quant)));
    //     localStorage.setItem("cartList",JSON.stringify(this.cartList));
    //   }
    
 
}

getStoreListFromLocalStorage(name)
{
    return JSON.parse(localStorage.getItem(name));
}

deleteList(f,i)
{
  //console.log(d);
  this.total=0
  let v=JSON.parse(localStorage.getItem("cartList"));
  v.splice(i,1);
  localStorage.removeItem(f.name);
  localStorage.setItem("cartList",JSON.stringify(v));
  this.food=JSON.parse(localStorage.getItem("cartList") );
  this.food.forEach(foods=>this.total=this.total+foods.price*foods.quantity);
}
ngOnInit()
{ 
  this.food=JSON.parse(localStorage.getItem("cartList"));
  this.food.forEach(foods=>this.total=this.total+foods.price*foods.quantity);
}

}