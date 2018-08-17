import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CKEditorModule } from 'ng2-ckeditor';

import { AddJdComponent } from './add-jd/add-jd.component';
import { QuestionAssignComponent } from './question/question-assign/question-assign.component';

import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../../share/share.module';
import { JdComponent } from './jd.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { JdListComponent } from './jd-list/jd-list.component';
import { AssignedQuestionsComponent } from './assigned-questions/assigned-questions.component';

const router: Routes = [
  {
    path : '',
    component : JdComponent,
    children: [
      { path: '', component: AddJdComponent },
      { path : 'edit/:jdid', component : AddJdComponent },
      { path : 'list', component : JdListComponent }
      { path : 'assignquestion', component : QuestionAssignComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    MDBBootstrapModulesPro.forRoot(),
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule
  ],
  declarations: [
    AddJdComponent,
    QuestionAssignComponent,
    JdComponent,
    SubmenuComponent,
    JdListComponent,
    AssignedQuestionsComponent
  ]
})
export class JdModule { }
