import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './admin.routing';
import { MDBBootstrapModulesPro } from '../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { CommonService } from '../services/common.service';
import { ValidationsService } from '../services/validations.service';


@NgModule({
  imports: [
    CommonModule,
    Routing,
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent,
    NavBarComponent
  ],
  providers: [
    CommonService,
    ValidationsService
  ]
})
export class AdminModule { }
