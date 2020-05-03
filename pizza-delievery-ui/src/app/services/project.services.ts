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
   getProducts(): Observable<Object>{

       return this._httpClient.get('http://localhost:9090/myapp/food',{headers:this.httpHeaders});
   }
   addProducts(productObj): Observable<Object>{
    
        return this._httpClient.post('http://localhost:9090/myapp/food',JSON.stringify(productObj),{headers:this.httpHeaders});
    }
    updateProducts(id,productObj): Observable<Object>{
        return this._httpClient.put(`http://localhost:9090/myapp/food/${id}`,JSON.stringify(productObj),{headers:this.httpHeaders});
    }
    deleteProducts(id):Observable<Object>{
        return this._httpClient.delete('http://localhost:9090/myapp/food/${id}',{headers:this.httpHeaders});
    }
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

}