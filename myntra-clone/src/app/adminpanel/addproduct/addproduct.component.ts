import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductsService } from '../../sharedServices/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  @ViewChild('f', {static: false}) productInput: NgForm;
  constructor(private prodServ: ProductsService) { }

  ngOnInit(): void {
  }
  addProduct() {
    console.log(this.productInput.value);
    this.prodServ.addNewProduct(this.productInput.value).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }
}
