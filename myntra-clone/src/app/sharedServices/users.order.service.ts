import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserAuthService } from './user.auth.service';
@Injectable({providedIn: 'root'})
export class OrdersServiceForUser{
    constructor(private http: HttpClient,public userObj: UserAuthService){}
    allOrdersArr = [];
    getAllPrevOrder(){
        return this.http.get('http://localhost/v1/get_order_detail.php', {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            params: new HttpParams().set('jwt',this.userObj._token)
          });
    }
}