import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScaleComponent } from './scale.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../../share/share.module';

const router: Routes = [
  { path : '', component : ScaleComponent  }
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
    ScaleComponent,
  ]
})
export class ScaleModule { }
