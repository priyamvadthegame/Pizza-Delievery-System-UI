import {Injectable} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class ProductService{
    public httpHeaders:HttpHeaders;

   constructor(private _httpClient:HttpClient){
     this.httpHeaders=new HttpHeaders()
       .set('allow-origin-access-control','*')
       .set('Content-type','application/json');
   }
   //deeptansu
   getFoodProducts(): Observable<Object>{

       return this._httpClient.get('http://localhost:9090/myapp/food',{headers:this.httpHeaders});
   }
   addFoodProducts(productObj,sessionId:string): Observable<Object>{
    
    return this._httpClient.post('http://localhost:9090/myapp/food',JSON.stringify(productObj),{headers:this.httpHeaders.set('auth-token',sessionId)});
}
    updateFoodProducts(id,productObj): Observable<Object>{
        return this._httpClient.put(`http://localhost:9090/myapp/food/${id}`,JSON.stringify(productObj),{headers:this.httpHeaders});
    }
    deleteFoodProducts(id,sessionId:string):Observable<Object>{
        return this._httpClient.delete(`http://localhost:9090/myapp/food/${id}`,{headers:this.httpHeaders.set('auth-token',sessionId)});
    }
    //deeptansu
    
    
    //anuj

    sortFoodByPrice(): Observable<Object> {
        return this._httpClient.get('http://localhost:9090/myapp/food/sort/price', 
        {headers: this.httpHeaders});
    }
    filterFoodBySearch(searchtext): Observable<Object> {
        return this._httpClient.get('http://localhost:9090/myapp/food/search/'+searchtext, 
        {headers: this.httpHeaders});
    }
    filterFoodByType(type): Observable<Object> {
        return this._httpClient.get('http://localhost:9090/myapp/food/type/'+type, 
        {headers: this.httpHeaders});
    }
    //anuj
    
    //pratyush
    updateUserProfile(UserProfileObj,sessionId:string):Observable<Object>
    {   
        return this._httpClient.put('http://localhost:9090/myapp/user/uprofile',JSON.stringify(UserProfileObj),{headers:this.httpHeaders.set('auth-token',sessionId)});
    }
    changeUserPassword(oldpassword:string,newpassword:string,sessionId:string)
    {   console.log(oldpassword,newpassword)
        return this._httpClient.post('http://localhost:9090/myapp/user/pass',{},{headers:this.httpHeaders.set('auth-token',sessionId),params:{'oldpassword':oldpassword,'newpassword':newpassword}});
    }
    
    addItemToCart(CartObj,sessionId:string,foodId:string):Observable<Object>
    {
        return this._httpClient.post('http://localhost:9090/myapp/cart/add',JSON.stringify(CartObj),{headers:this.httpHeaders.set('authToken',sessionId),params:{'foodId':foodId}});
    }
    deleteItemFromCart(sessionId:string,cartId:string,foodId:string)
    {
        return this._httpClient.delete('http://localhost:9090/myapp/cart/delete',{headers:this.httpHeaders.set('authToken',sessionId),params:{'cartId':cartId,'foodId':foodId}});
    }
    //pratyush

    //satwik
    registerUser(userProfileObj, username:string, password:string, usertype:string):Observable<Object>
    {
        return this._httpClient.post('http://localhost:9090/myapp/user', JSON.stringify(userProfileObj),
    {headers:this.httpHeaders, params:{'username':username, 'password':password, 'usertype':usertype}});
    }
    loginUser(userObj):Observable<Object>
    {
        return this._httpClient.post('http://localhost:9090/myapp/user/login', JSON.stringify(userObj),{headers:this.httpHeaders}); 
    }
    viewProfile(loginStatus:string):Observable<Object>
    {
        return this._httpClient.get('http://localhost:9090/myapp/user/profile', {headers:this.httpHeaders.set('auth-token',loginStatus)});
    }
    logoutUser(loginStatus:string):Observable<Object>
    {
        return this._httpClient.put('http://localhost:9090/myapp/user/logout',{}, {headers:this.httpHeaders.set('auth-token',loginStatus)});
    }
    //satwik
    //priyamvad
    addCreditCard(creditCardObj,sessionId:string):Observable<Object>
    {   
        return this._httpClient.post('http://localhost:9090/myapp/user/creditcard',JSON.stringify(creditCardObj),{headers:this.httpHeaders.set('authToken',sessionId)});
    }

    getAllCreditCardOfUser(sessionId:string):Observable<Object>
    {   
        return this._httpClient.get('http://localhost:9090/myapp/user/creditcard',{headers:this.httpHeaders.set('authToken',sessionId)});
    }
    deleteCreditCardDetailsOfUser(sessionId:string,creditcardNumber:string):Observable<Object>
    {   
        return this._httpClient.delete('http://localhost:9090/myapp/user/creditcard',{headers:this.httpHeaders.set('authToken',sessionId),params:{'creditcardNumber':creditcardNumber}});
    }
    verifyCreditCard(sessionId:string,creditcardNumber:string):Observable<Object>
    {     
        return this._httpClient.post('http://localhost:9090/myapp/user/creditcard/verify',{},{headers:this.httpHeaders.set('authToken',sessionId),params:{'creditcardNumber':creditcardNumber}});
    }

    addFoodToStore(sessionId:string,foodId:string,storeId:string)
    {
        return this._httpClient.post('http://localhost:9090/myapp/store1/food',{},{headers:this.httpHeaders.set('authToken',sessionId),params:{'storeId':storeId,'foodId':foodId}});
    }
    deleteFoodFromStore(sessionId:string,foodId:string,storeId:string)
    {
        return this._httpClient.delete('http://localhost:9090/myapp/store/food',{headers:this.httpHeaders.set('authToken',sessionId),params:{'storeId':storeId,'foodId':foodId}});
    }
    //priyamvad

    //shubam prakash
    getAllStore(): Observable<Object>{
        return this._httpClient.get('http://localhost:9090/myapp/store',{headers:this.httpHeaders});
    }

    deleteStore(storeId) :Observable<Object>{
        return this._httpClient.delete(`http://localhost:9090/myapp/store/${storeId}`,{headers:this.httpHeaders });
    }

    registerStore(storeObj): Observable<Object>{
        return this._httpClient.post('http://localhost:9090/myapp/store1',JSON.stringify(storeObj),{headers:this.httpHeaders});
    }

    filterStoreByFood(foodId): Observable<Object>{
        return this._httpClient.get(`http://localhost:9090/myapp/store/food/${foodId}`,{headers:this.httpHeaders} );
    }
    //subham prakash

    //suraj

    placeOrder(sessionId:string,orderJson:Object,foodArray:Array<string>,totalPrice)
    {  // let foodArray:Array<string>;
        //let cartList=JSON.parse(localStorage.getItem("cartList"))
        //let totalPrice;
        //cartList.forEach(element => {
           // foodArray.push(element.foodId);
           // totalPrice+=Number(element.price);
       // });
       let foodsList:Array<string>=[];
       foodsList.push("1");
        return this._httpClient.post('http://localhost:9090/myapp/food/order',JSON.stringify(orderJson),{headers:this.httpHeaders.set('authToken',sessionId),params:{'foods':foodArray,'totalprice':totalPrice,'storeId':"54"}});
    }
    getOrder(sessionId:string,cartId:string,orderJson)
    {
        return this._httpClient.post('http://localhost:9090/myapp/order/user',orderJson,{headers:this.httpHeaders.set('authToken',sessionId),params:{'cartId':cartId}});
    }
    filterOrderByStatus(sessionId:string,cartId:string,orderJson)
    {
        return this._httpClient.post('http://localhost:9090/myapp/order/user/{status}',orderJson,{headers:this.httpHeaders.set('authToken',sessionId),params:{'cartId':cartId}});
    }
    //suraj

}