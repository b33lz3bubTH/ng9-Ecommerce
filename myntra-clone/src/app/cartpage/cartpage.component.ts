import { Component, OnInit } from '@angular/core';
import { CartService } from '../sharedServices/cart.service';
import { UserAuthService } from '../sharedServices/user.auth.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {
  quanDemo: number;
  constructor(public cartObj: CartService,public userObj: UserAuthService) { }

  ngOnInit(): void {
  }
  removeFromCart(id: number) {
    console.log('Id must be removed:  ', id);
    this.cartObj.removeProdFromCart(id);
  }
}
