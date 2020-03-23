import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../sharedServices/orders.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(public ordersServiceObj: OrdersService) { }

  ngOnInit(): void {
    console.log("CALLED THE SERVICE \n\n");
    this.ordersServiceObj.initOrdersArray().subscribe(res => {
      this.ordersServiceObj.OrderArray = res['data'];
      console.log("FETCHED: ", res);
    },err => {
      console.log(err);
    });
  }

}
