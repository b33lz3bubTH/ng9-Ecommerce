import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpanelComponent } from './adminpanel.component';
import { AdminLockGuard } from '../guards/admin.guard.service';
import { CheckorderComponent } from './checkorder/checkorder.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const route: Routes = [
    { path: 'admin', component: AdminpanelComponent,canActivate: [AdminLockGuard], canActivateChild:[AdminLockGuard], children: [
        { path: 'checkorders', component: CheckorderComponent },
        { path: 'newproduct', component: AddproductComponent }
      ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports:[
        RouterModule
    ]
})
export class AdminAuthRouting {

}