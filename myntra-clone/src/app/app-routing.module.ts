import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

import { LoginpageComponent } from './user-auth/loginpage/loginpage.component';
import { RegistrationpageComponent } from './user-auth/registrationpage/registrationpage.component';

import { CheckorderComponent } from './adminpanel/checkorder/checkorder.component';
import { AddproductComponent } from './adminpanel/addproduct/addproduct.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';

import { OrderProductComponent } from './userpanel/order-product/order-product.component';
import { UserordersComponent } from './userpanel/userorders/userorders.component';
import { UserprofileComponent } from './userpanel/userprofile/userprofile.component';

import { LoggedAuthGuard } from './guards/login.auth.guard.service';
import { AfterLoggedAuthGuard } from './guards/after-login.guard.service';
import { AdminLockGuard } from './guards/admin.guard.service';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: 'full' },
    { path: 'cart', component: CartpageComponent },
    { path: 'place-order', component: OrderProductComponent, canActivate: [LoggedAuthGuard] },
    { path: 'check-users-order', component: UserordersComponent,canActivate: [LoggedAuthGuard] },
    { path: 'check-users-profile', component: UserprofileComponent,canActivate: [LoggedAuthGuard] },
    { path: 'admin', component: AdminpanelComponent,canActivate: [AdminLockGuard], canActivateChild:[AdminLockGuard], children: [
        { path: 'checkorders', component: CheckorderComponent },
        { path: 'newproduct', component: AddproductComponent }
      ]
    },
    { path: 'search/:q', component: SearchpageComponent},
    { path: 'login', component: LoginpageComponent, canActivate: [AfterLoggedAuthGuard] },
    { path: 'register', component: RegistrationpageComponent, canActivate: [AfterLoggedAuthGuard] },
    { path: '**', redirectTo: '/login' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{
}
