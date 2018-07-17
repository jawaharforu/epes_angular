import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestimonialComponent } from './testimonial.component';
import { TestimonialListComponent } from './testimonial-list/testimonial-list.component';
import { DataTablesModule } from 'angular-datatables';

const router: Routes = [
  { path : '', component : TestimonialComponent  },
  { path : 'list', component : TestimonialListComponent  },
  { path : 'edit/:testimonialid', component : TestimonialComponent  }
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
    TestimonialComponent,
    TestimonialListComponent
  ]
})
export class TestimonialModule { }
