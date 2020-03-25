import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CheckorderComponent } from './checkorder/checkorder.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminpanelComponent } from './adminpanel.component';
import { AdminAuthRouting } from './admin.routing';

@NgModule({
    declarations: [
        CheckorderComponent,
        AddproductComponent,
        AdminpanelComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        AdminAuthRouting
    ],
    exports: [
        CheckorderComponent,
        AddproductComponent,
        AdminpanelComponent
    ]
})
export class AdminModule {

}