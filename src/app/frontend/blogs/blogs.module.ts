import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';

import { BlogComponent } from './blog.component';
import { BloginnerComponent } from './bloginner/bloginner.component';

const router: Routes = [
  { path : '', component : BlogComponent  },
  { path : ':blogid', component : BloginnerComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
    BlogComponent,
    BloginnerComponent
  ]
})
export class BlogsModule { }
