import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserAuthService } from '../sharedServices/user.auth.service';

@Injectable({providedIn: 'root'})
export class OrdersService {
  public OrderArray = [];
  constructor(private http: HttpClient, public userObj: UserAuthService){}

  initOrdersArray(){
    return this.http.get('http://localhost/v1/admin.getall.orders.php', {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        params: new HttpParams().set('jwt',this.userObj._token)
      })
  }
  changeStatus(obj){
    for(const x of this.OrderArray){
      if(x.id == obj.id){
        if(x.status == "processed"){
          x.status = 'processing';
        }else{
          x.status = 'processed';
        }
        break;
      }
    }
    return this.http.post('http://localhost/v1/change_order_status.php',obj,{
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        params: new HttpParams().set('jwt',this.userObj._token)
      })
  }
  getTotalOrders(){
    return this.OrderArray.length;
  }
  getTotalPendingOrders(){
    let pending = 0;
    for(const x of this.OrderArray){
      if(x.status == "processing"){
        pending++;
      }
    }
    return pending;
  }
}
