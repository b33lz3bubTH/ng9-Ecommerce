import { Component, OnInit } from '@angular/core';
import {CartService} from './sharedServices/cart.service';
import { UserAuthService } from './sharedServices/user.auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService]
})
export class AppComponent implements OnInit {
  constructor(private cartObj: CartService, private userObj: UserAuthService) {
  }
  title = 'myntra-clone';
  ngOnInit() {
    this.cartObj.loadCartFromLocal();
    this.userObj.loadSession();
  }
}
