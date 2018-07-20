import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { OrganogramComponent } from './organogram.component';
import { OrganogramAddComponent } from './organogram-add/organogram-add.component';
import { OrgChartModule } from 'ng-org-chart';

const router: Routes = [
  { path : '', component : OrganogramAddComponent  },
  { path : ':organogramid', component : OrganogramAddComponent  },
  { path : 'structure/view', component : OrganogramComponent  },
  { path : 'edit/:organogramid/:edit', component : OrganogramAddComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    OrgChartModule
  ],
  declarations: [OrganogramComponent, OrganogramAddComponent]
})
export class OrganogramModule { }
