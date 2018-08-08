import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

import { FeatureComponent } from './feature.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { DataTablesModule } from 'angular-datatables';
import { SubmenuComponent } from './submenu/submenu.component';
import { ParentComponent } from './parent/parent.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path : '', component : FeatureComponent  },
      { path : 'list', component : FeatureListComponent  },
      { path : 'edit/:featureid', component : FeatureComponent  }
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
    CKEditorModule,
    DataTablesModule
  ],
  declarations: [FeatureComponent, FeatureListComponent, SubmenuComponent, ParentComponent]
})
export class FeatureModule { }
