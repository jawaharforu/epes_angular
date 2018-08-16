import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';

import { RegistrationComponent } from './registration.component';
import { ProductComponent } from '../../admin/frontend/product/product/product.component';

const router: Routes = [
  { path : '', component : RegistrationComponent  },
  { path : '/:productid', component : ProductComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegistrationComponent,
    ProductComponent
  ]
})
export class RegistrationModule { }
