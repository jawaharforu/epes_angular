import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { ContactUsComponent } from './contact-us.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

const router: Routes = [
  { path : '', component : ContactUsComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
