export class Cart
{
    constructor(public name:string,public foodId:number,public quantity:number,public price:number)
    {
            this.foodId=foodId;
            this.quantity=quantity;
            this.price=price;
            this.name=name;
            
    }
}