import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule } from '@angular/forms';
import { JDListComponent } from './jdlist/jdlist.component';
import { AssignJDComponent } from './assign-jd.component';
import { DataTablesModule } from 'angular-datatables';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

const router: Routes = [
  { path : '', component : JDListComponent  },
  { path : 'employees/:jdid', component : AssignJDComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    DataTablesModule,
    AngularMultiSelectModule
  ],
  declarations: [JDListComponent, AssignJDComponent]
})
export class AssignJDModule { }
