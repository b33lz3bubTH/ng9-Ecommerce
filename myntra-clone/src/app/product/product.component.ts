import {Component, Input, OnInit} from '@angular/core';
import {Product} from './product.model';
import {CartService} from '../sharedServices/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() element: Product;
  constructor(public cartObj: CartService) { }

  ngOnInit(): void {
  }
  addToCart(e) {
    console.log(e);
    // service to push selected thing on cart object.
    this.cartObj.addToCart(e);
  }
}
