import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductroadmapListComponent } from './productroadmap-list/productroadmap-list.component';

import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { DataTablesModule } from '../../../../../node_modules/angular-datatables';
import { ProductroadmapComponent } from './productroadmap/productroadmap.component';
import { ParentComponent } from './parent/parent.component';
import { SubmenuComponent } from './submenu/submenu.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path : '', component : ProductroadmapComponent  },
      { path : 'list', component : ProductroadmapListComponent  },
      { path : 'edit/:productroadmapid', component : ProductroadmapComponent  }
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
  declarations: [
    ProductroadmapListComponent,
    ProductroadmapComponent,
    ParentComponent,
    SubmenuComponent
  ]
})
export class ProductroadmapModule { }
