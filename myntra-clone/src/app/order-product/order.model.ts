export class OrderProdDesc{
    product_id: number;
    quantity: number;
    constructor(pid, quantity){
        this.product_id = pid;
        this.quantity = quantity;
    }
}
export class OrderData{
    private ordered_by: number;
    private orders: OrderProdDesc[];
    constructor(o_by){
        this.ordered_by = o_by;
        this.orders = []; 
    }
    includeAProduct(ord: OrderProdDesc){
        this.orders.push(ord);
    }
}