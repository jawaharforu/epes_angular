import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignJdComponent } from './assign-jd/assign-jd.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { CKEditorModule } from 'ng2-ckeditor';

const router: Routes = [
  { path : '', component : EmployeeComponent  },
  { path : 'assignjd', component : AssignJdComponent  },
  { path : 'list', component : EmployeeListComponent  },
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
    AssignJdComponent,
    EmployeeListComponent,
    EmployeeComponent
  ]
})
export class EmployeeModule { }
