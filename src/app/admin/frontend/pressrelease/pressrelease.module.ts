import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { DataTablesModule } from 'angular-datatables';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';
import { PressreleaseListComponent } from './pressrelease-list/pressrelease-list.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ParentComponent } from './parent/parent.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path : '', component : PressreleaseComponent},
      { path : 'list', component :  PressreleaseListComponent},
      { path : 'edit/:pressreleaseid', component : PressreleaseComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    CKEditorModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router)
  ],
  declarations: [
    PressreleaseComponent,
    PressreleaseListComponent,
    SubmenuComponent,
    ParentComponent
  ]
})
export class PressreleaseModule { }
