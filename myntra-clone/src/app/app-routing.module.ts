import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';

import { OrderProductComponent } from './userpanel/order-product/order-product.component';
import { UserordersComponent } from './userpanel/userorders/userorders.component';
import { UserprofileComponent } from './userpanel/userprofile/userprofile.component';

import { LoggedAuthGuard } from './guards/login.auth.guard.service';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: 'full' },
    { path: 'cart', component: CartpageComponent },
    { path: 'place-order', component: OrderProductComponent, canActivate: [LoggedAuthGuard] },
    { path: 'check-users-order', component: UserordersComponent,canActivate: [LoggedAuthGuard] },
    { path: 'check-users-profile', component: UserprofileComponent,canActivate: [LoggedAuthGuard] },
    { path: 'search/:q', component: SearchpageComponent},
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
