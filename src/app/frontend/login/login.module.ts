import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { LoginComponent } from './login.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

const router: Routes = [
  { path : '', component : LoginComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
