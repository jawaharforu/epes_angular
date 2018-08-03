import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './jd.routing';
import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CKEditorModule } from 'ng2-ckeditor';
import { FileSelectDirective } from 'ng2-file-upload';

import { AddJdComponent } from './add-jd/add-jd.component';
import { EditJdComponent } from './edit-jd/edit-jd.component';
import { QuestionAssignComponent } from './question/question-assign/question-assign.component';
// import { ScaleComponent } from './scale/scale/scale.component';
// import { HeaderComponent } from './header/header/header.component';
// import { ArrayToStringPipe } from '../../pipes/array-to-string.pipe';
// import { AssessmentTypeComponent } from './assessment-type/assessment-type.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    MDBBootstrapModulesPro.forRoot(),
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedModule
  ],
  declarations: [
    AddJdComponent,
    EditJdComponent,
    FileSelectDirective,
    QuestionAssignComponent,
    // ScaleComponent,
    // HeaderComponent,
    // AssessmentTypeComponent,
    // ArrayToStringPipe
  ]
})
export class JdModule { }
