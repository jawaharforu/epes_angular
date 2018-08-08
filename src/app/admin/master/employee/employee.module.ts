import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { SubmenuComponent } from './submenu/submenu.component';
import { ParentComponent } from './parent/parent.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path: '', component: EmployeeComponent },
      { path : 'edit/:employeeid', component : EmployeeComponent },
      { path : 'list', component : EmployeeListComponent }
    ]
  }
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
    EmployeeListComponent,
    EmployeeComponent,
    SubmenuComponent,
    ParentComponent
  ]
})
export class EmployeeModule { }
