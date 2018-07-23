import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';

import { ResourcesComponent } from './resources.component';
import { FormsModule } from '@angular/forms';

const router: Routes = [
  { path : '', component : ResourcesComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule
  ],
  declarations: [
    ResourcesComponent
  ]
})
export class ResourcesModule { }
