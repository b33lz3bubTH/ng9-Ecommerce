import {Product} from '../product/product.model';
import {OrderData} from '../order-product/order.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserAuthService } from './user.auth.service';

@Injectable()
export class CartService {
  public cartDB = []; // complex object { Product, quantity }
  // add2Cart Will add only 1 copy of the object.
  constructor(private http: HttpClient, public userObj: UserAuthService){}
  addToCart(e: Product) {
    for (const x of this.cartDB) {
      if (e.id === x.prod.id) {
        return;
      }
    }
    this.cartDB.push({
      prod: e,
      quantity: 1
    });
    this.saveCartToLocal();
  }
  sizeOfCart() {
    return this.cartDB.length;
  }
  showCartData() {
    console.log(this.cartDB);
  }
  getTotalMoney() {
    let total = 0;
    for (const x of this.cartDB) {
      total = total + (x.quantity * x.prod.price);
    }
    return total;
  }
  removeProdFromCart(id) {
    for (const [i, v] of this.cartDB.entries()) {
      if (v.prod.id === id) {
        this.cartDB.splice(i, 1);
      }
    }
    this.saveCartToLocal();
  }
  saveCartToLocal() {
    localStorage.setItem("cart", JSON.stringify(this.cartDB));
  }
  loadCartFromLocal() {
    if(localStorage.getItem("cart"))
      this.cartDB = JSON.parse(localStorage.getItem("cart"));
    else
      console.log("NO Data in cart");
  }
  placeTheOrders(odObj: OrderData) {
    return this.http.post('http://localhost/v1/place_order.php', odObj, {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            params: new HttpParams().set('jwt',this.userObj._token)
          });
  }
  inCart(id) {
    for (const [i, v] of this.cartDB.entries()) {
      if (v.prod.id === id) {
        return true;
      }
    }
    return false;
  }
}
