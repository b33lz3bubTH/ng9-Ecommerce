import { Component, OnInit } from '@angular/core';
import {OrderData, OrderProdDesc} from './order.model';
import { UserAuthService } from '../../sharedServices/user.auth.service';
import { CartService } from '../../sharedServices/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {

  constructor(public userObj: UserAuthService, public cartObj: CartService,private router: Router) { }

  
  ngOnInit(): void {
  }

  placeOrder(){
    let odObj = new OrderData(this.userObj.id);
    for (const x of this.cartObj.cartDB) {
      // console.log("prod: ", x.prod.id, x.quantity);
      odObj.includeAProduct(new OrderProdDesc(x.prod.id, x.quantity));
    }
    console.log(odObj);
    this.cartObj.placeTheOrders(odObj).subscribe(res => {
      console.log(res);
      this.cartObj.cartDB = [];
      this.cartObj.saveCartToLocal();
      this.router.navigate(['/']);
    },err => {
      console.log(err);
    });

  }
}
