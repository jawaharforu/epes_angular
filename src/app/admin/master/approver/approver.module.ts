import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { ApproverComponent } from './approver.component';

const router: Routes = [
  { path : '', component : ApproverComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    CKEditorModule
  ],
  declarations: [
    ApproverComponent
  ]
})
export class ApproverModule { }
