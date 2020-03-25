import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';

import { UserAuthRouting } from './user-auth.routing';

@NgModule({
    declarations: [
        LoginpageComponent,
        RegistrationpageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        UserAuthRouting
    ],
    exports: [
        LoginpageComponent,
        RegistrationpageComponent
    ]
})
export class UserAuthModule {}