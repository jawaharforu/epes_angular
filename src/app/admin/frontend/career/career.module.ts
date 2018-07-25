import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerListComponent } from './career-list/career-list.component';

import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CareerComponent } from './career/career.component';
import { DataTablesModule } from '../../../../../node_modules/angular-datatables';
import { CKEditorModule } from '../../../../../node_modules/ng2-ckeditor';

const router: Routes = [
  { path : '', component : CareerComponent  },
  { path : 'list', component : CareerListComponent  },
  { path : 'edit/:careerid', component : CareerComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    MDBBootstrapModulesPro.forRoot(),
    DataTablesModule,
    CKEditorModule
  ],
  declarations: [
    CareerComponent,
    CareerListComponent
  ]
})
export class CareerModule { }
 