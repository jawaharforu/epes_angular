import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { AssessmentComponent } from './assessment.component';
import { AssessmentListComponent } from './assessment-list/assessment-list.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ParentComponent } from './parent/parent.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path: '', component: AssessmentComponent },
      { path : 'edit/:assessmentid', component : AssessmentComponent },
      { path : 'list', component : AssessmentListComponent }
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
    AssessmentComponent,
    AssessmentListComponent,
    SubmenuComponent,
    ParentComponent
  ]
})
export class AssessmentModule { }
