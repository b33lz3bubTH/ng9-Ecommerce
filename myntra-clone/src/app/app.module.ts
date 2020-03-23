import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { AdbannerComponent } from './adbanner/adbanner.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { CheckorderComponent } from './checkorder/checkorder.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { UserordersComponent } from './userorders/userorders.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
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
  providers: [LoggedAuthGuard,AfterLoggedAuthGuard,AdminLockGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
