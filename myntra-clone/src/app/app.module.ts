import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
// ------- NOT SENDING THIS IN MODULE --------
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { AdbannerComponent } from './adbanner/adbanner.component';
// WILL BE BROKEN -----------------------------

import { LoginpageComponent } from './user-auth/loginpage/loginpage.component';
import { RegistrationpageComponent } from './user-auth/registrationpage/registrationpage.component';

import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { CheckorderComponent } from './adminpanel/checkorder/checkorder.component';
import { AddproductComponent } from './adminpanel/addproduct/addproduct.component';

import { OrderProductComponent } from './userpanel/order-product/order-product.component';
import { UserordersComponent } from './userpanel/userorders/userorders.component';
import { UserprofileComponent } from './userpanel/userprofile/userprofile.component';

import { LoggedAuthGuard } from './guards/login.auth.guard.service';
import { AfterLoggedAuthGuard } from './guards/after-login.guard.service';
import { AdminLockGuard } from './guards/admin.guard.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    HomepageComponent,
    CartpageComponent,
    SearchpageComponent,
    AdbannerComponent,
    LoginpageComponent,
    RegistrationpageComponent,
    CheckorderComponent,
    AddproductComponent,
    AdminpanelComponent,
    OrderProductComponent,
    UserordersComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    LoggedAuthGuard,
    AfterLoggedAuthGuard,
    AdminLockGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
