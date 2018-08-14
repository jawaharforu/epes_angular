import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule, Routes } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { EmailTemplateComponent } from './email-template.component';
import { EmailtemplatelistComponent } from './emailtemplatelist/emailtemplatelist.component';

const router: Routes = [
  { path: '', component: EmailTemplateComponent },
  { path: 'list', component: EmailtemplatelistComponent },
  { path: 'edit/:emailtemplateid', component: EmailTemplateComponent }
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
    EmailTemplateComponent,
    EmailtemplatelistComponent,
  ]
})
export class EmailTemplateModule { }
