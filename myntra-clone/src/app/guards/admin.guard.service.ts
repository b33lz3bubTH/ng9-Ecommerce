import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../sharedServices/user.auth.service';

@Injectable()
export class AdminLockGuard implements CanActivate, CanActivateChild {
  constructor(private _router: Router,private  userObj: UserAuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.userObj.isLogged && this.userObj.isAdmin){
    return true;
    }
    this._router.navigate(['/']);
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.userObj.isLogged && this.userObj.isAdmin){
    return true;
    }
    this._router.navigate(['/']);
  }

}