import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInformationComponent } from './company-information.component';
import { SharedModule } from '../../share/share.module';

const router: Routes = [
  { path : '', component : CompanyInformationComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule
  ],
  declarations: [
    CompanyInformationComponent,
  ]
})
export class CompanyInformationModule { }
