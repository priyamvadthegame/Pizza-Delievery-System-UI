export class Cart
{
    constructor(public foodId:number,public quantity:number,public price:number )
    {
            this.foodId=foodId;
            this.quantity=quantity;
            this.price=price;
    }
}