import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../sharedServices/user.auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(public userObj: UserAuthService) { }

  ngOnInit(): void {
  }

}
