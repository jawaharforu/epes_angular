import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { CustomerExperienceComponent } from './customer-experience.component';

const router: Routes = [
  { path : '', component : CustomerExperienceComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
    CustomerExperienceComponent
  ]
})
export class CustomerExperienceModule { }
