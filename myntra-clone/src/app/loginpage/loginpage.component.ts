import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserAuthService } from '../sharedServices/user.auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  @ViewChild('f', {static: false}) loginForm: NgForm;
  constructor(private userObj: UserAuthService,private router: Router) { }

  ngOnInit(): void {
  }
  loginSubmit() {
    // console.log(this.loginForm.value);
    this.userObj.login(this.loginForm.value).subscribe(res => {
      console.log(res);
      this.userObj.isAdmin = (res["is_admin"] == "1")? true : false;
      this.userObj.isLogged = true;
      this.userObj.id = +res["id"];
      this.userObj._token = res["webToken"];
      this.userObj.email = res["email"];
      this.userObj.name = res["name"];
      this.userObj._expiry_token_date = new Date(res["_expiry_token_date"]*1000);
      this.userObj.saveSession();
      console.log(this.userObj);
      this.router.navigate(['/']);
    });
  }
}
