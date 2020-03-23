import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { CartService} from '../sharedServices/cart.service';
import { Router } from '@angular/router';
import { UserAuthService } from '../sharedServices/user.auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{
  @ViewChild('lookupfor', {static:false}) searchInputRef: ElementRef;

  constructor(public cartObj: CartService,private route: Router,public authServObj: UserAuthService) {
  }
  ngOnInit() {}
  logCart() {
    this.cartObj.showCartData();
  }
  lookFor() {
    if (this.searchInputRef.nativeElement.value.length < 3) return;
    this.route.navigate(['/search',this.searchInputRef.nativeElement.value]);
  }
}
