import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';


import { SubmenuComponent } from './submenu/submenu.component';
import { ParentComponent } from './parent/parent.component';
import { AssessmenttypeComponent } from './assessmenttype.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path: '', component: AssessmenttypeComponent },
      { path : 'edit/:assessmenttypeid', component : AssessmenttypeComponent }
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
  declarations: [AssessmenttypeComponent,SubmenuComponent, ParentComponent]
})
export class AssessmenttypeModule { }
