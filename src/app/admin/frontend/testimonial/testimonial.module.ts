import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestimonialComponent } from './testimonial.component';
import { TestimonialListComponent } from './testimonial-list/testimonial-list.component';
import { DataTablesModule } from 'angular-datatables';
import { ParentComponent } from './parent/parent.component';
import { SubmenuComponent } from './submenu/submenu.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path : '', component : TestimonialComponent  },
      { path : 'list', component : TestimonialListComponent  },
      { path : 'edit/:testimonialid', component : TestimonialComponent  }
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
    DataTablesModule
  ],
  declarations: [
    TestimonialComponent,
    TestimonialListComponent,
    ParentComponent,
    SubmenuComponent
  ]
})
export class TestimonialModule { }
