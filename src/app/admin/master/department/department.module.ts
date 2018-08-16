import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { DepartmentsComponent } from './departments.component';
import { SubDepartmentComponent } from './sub-department/sub-department.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { DataTablesModule } from 'angular-datatables';

const router: Routes = [
  {
    path : '',
    component : DepartmentsComponent,
    children: [
      { path: '', component: DepartmentComponent },
      { path : 'sub', component : SubDepartmentComponent }
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
    DataTablesModule
  ],
  declarations: [DepartmentComponent, SubDepartmentComponent, SubmenuComponent, DepartmentsComponent]
})
export class DepartmentModule { }
