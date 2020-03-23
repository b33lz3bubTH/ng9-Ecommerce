import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService, UserDataModule } from '../sharedServices/registration.service';
import { AlertBox } from '../sharedServices/alert.model';
@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {
  @ViewChild('f', {static: false}) registrationForm: NgForm;
  constructor(private regServObj: RegistrationService) { }

  public msg: AlertBox = {type:'',msg:'',validity:false};
  
  ngOnInit(): void {
  }
  onSubmit() {
    const obj: UserDataModule = {
      name: this.registrationForm.value.userFirstName + ' ' + this.registrationForm.value.userLastName,
      email: this.registrationForm.value.userEmail,
      phone: this.registrationForm.value.userMobile,
      password: this.registrationForm.value.password,
      address: this.registrationForm.value.userCity + ' ' + this.registrationForm.value.userState + ' ' +  this.registrationForm.value.zipcode
    };
    this.msg.msg = "Sending Data....";
    this.msg.type = "alert-primary";
    this.msg.validity = true;
    this.regServObj.createUser(obj).subscribe(response =>{
      console.log(response);
      this.registrationForm.reset();
      this.msg.msg = "Successful";
      this.msg.type = "alert-success";
    },error => {
      console.log("Error = > ",error);
      // FROM SERVER END ERROR
      console.log("Error Code = > ",error.error.status);
      console.log("Error MSG = > ",error.error.message);
      this.msg.msg = error.error.message;
      this.msg.type = "alert-danger";
    });
  }
}
