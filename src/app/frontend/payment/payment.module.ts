import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { PaymentComponent } from './payment.component';

const router: Routes = [
  { path : '', component : PaymentComponent },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
  ],
  declarations: [
    PaymentComponent
  ]
})
export class PaymentModule { }
