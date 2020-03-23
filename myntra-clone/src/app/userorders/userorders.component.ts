import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../sharedServices/user.auth.service';
import { OrdersServiceForUser } from '../sharedServices/users.order.service';
class AllOrdersX{
  id: number;
  status: string;
  product_id: number;
  name: number;
  price: number;
  imgPath: string;
  description: string;
  quantity: number;
}
@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent implements OnInit {
  allOrdersObj: AllOrdersX[];
  constructor(private router: Router, private userObj: UserAuthService, public userOrdObj: OrdersServiceForUser) {
    this.allOrdersObj = [];
   }

  ngOnInit(): void {
    this.userOrdObj.getAllPrevOrder().subscribe(res => {
      console.log("RES: ", res);
      this.allOrdersObj = res["data"];
    }, err =>{
      console.log(err);
    });
  }

}
