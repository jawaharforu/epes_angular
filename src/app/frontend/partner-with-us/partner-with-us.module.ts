import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { PartnerWithUsComponent } from './partner-with-us.component';

const router: Routes = [
  { path : '', component : PartnerWithUsComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
    PartnerWithUsComponent
  ]
})
export class PartnerWithUsModule { }
