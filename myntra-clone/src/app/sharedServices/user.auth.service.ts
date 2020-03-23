import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserAuthService {
  public id: number;
  public email: string;
  _token: string;
  _expiry_token_date: Date;
  public isLogged: boolean;
  isAdmin: boolean;
  name: string;
  constructor(private http: HttpClient){}
  
  login(obj:{userData:{email:string,pass:string}}) {
    // console.log(obj.userData);
    return this.http.post('http://localhost/v1/login.php', obj.userData, {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
          });
  }
  autoLogin() {
  // from Local storage fetch the user save details
  }
  logOut() {
    localStorage.clear();
    this.id = null; this.email = null; this._token = null; this._expiry_token_date = null;
    this.name = null; this.isAdmin = null; this.isLogged = null;
  }
  saveSession() {
    console.log("Saving .... Session ");
    localStorage.setItem("uid", this.id.toString()); 
    localStorage.setItem("uemail", this.email); 
    localStorage.setItem("_token", this._token); 
    localStorage.setItem("_token_exp", this._expiry_token_date.toString()); 
    localStorage.setItem("uname", this.name); 
    localStorage.setItem("isAdmin", this.isAdmin.toString()); 
    localStorage.setItem("islogged", this.isLogged.toString()); 
  }
  loadSession(){
    console.log("trying to load");
    if(!localStorage.getItem("uid")){
      return;
    }
    this.id = +localStorage.getItem("uid");
    this.email = localStorage.getItem("uemail");
    this._token = localStorage.getItem("_token");
    this.name = localStorage.getItem("uname");
    this._expiry_token_date = new Date(localStorage.getItem("_token_exp"));
    this.isLogged = (localStorage.getItem("islogged") === 'true');
    this.isAdmin = (localStorage.getItem("isAdmin") === 'true');
  }
}
