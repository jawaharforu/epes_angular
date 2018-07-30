import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { QuestionComponent } from './question.component';
import { ArrayToStringPipe } from '../../pipes/array-to-string.pipe';
import { ScaleComponent } from '../JD/scale/scale/scale.component';
import { HeaderComponent } from '../JD/header/header/header.component';
import { AssessmentTypeComponent } from '../JD/assessment-type/assessment-type.component';

const router: Routes = [
  { path : '', component : QuestionComponent  }
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
  declarations: [
    QuestionComponent,
    ScaleComponent,
    HeaderComponent,
    AssessmentTypeComponent,
    ArrayToStringPipe
  ]
})
export class QuestionModule { }
