import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../sharedServices/orders.service';

@Component({
  selector: 'app-checkorder',
  templateUrl: './checkorder.component.html',
  styleUrls: ['./checkorder.component.css']
})
export class CheckorderComponent implements OnInit {
  constructor( public ordServObj: OrdersService) { }

  ngOnInit(): void {
  }
  changeProcessedStatusToComplete(x){
    this.ordServObj.changeStatus({"id":x,"status":'processed'}).subscribe(res =>{
      console.log(res);
    }, err =>{
      console.error(err);
    });
  }
  changeProcessedStatusToInComplete(x){
    this.ordServObj.changeStatus({"id":x,"status":'processing'}).subscribe(res =>{
      console.log(res);
    }, err =>{
      console.error(err);
    });
  }
}
