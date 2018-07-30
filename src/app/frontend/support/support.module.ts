import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { SupportComponent } from './support.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '../../../../node_modules/@angular/forms';

const router: Routes = [
  { path : '', component : SupportComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    Ng2SearchPipeModule,
    FormsModule
  ],
  declarations: [
    SupportComponent
  ]
})
export class SupportModule { }
