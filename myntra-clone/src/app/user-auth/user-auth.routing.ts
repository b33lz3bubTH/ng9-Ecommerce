import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';

import { AfterLoggedAuthGuard } from '../guards/after-login.guard.service';

const route: Routes = [
    { path: 'login', component: LoginpageComponent, canActivate: [AfterLoggedAuthGuard] },
    { path: 'register', component: RegistrationpageComponent, canActivate: [AfterLoggedAuthGuard] },
]
@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports:[
        RouterModule
    ]
})
export class UserAuthRouting {

}