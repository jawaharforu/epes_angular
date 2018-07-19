import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './frontend.routing';
import { MDBBootstrapModulesPro } from '../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavheaderComponent } from './navheader/navheader.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTopComponent } from './footer/footer-top/footer-top.component';
import { FooterBottomComponent } from './footer/footer-bottom/footer-bottom.component';
import { FrontendComponent } from './frontend.component';
import { MdmodelComponent } from './mdmodel/mdmodel.component';

@NgModule({
  imports: [
    CommonModule,
    Routing,
    MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavheaderComponent,
    FooterComponent,
    FooterTopComponent,
    FooterBottomComponent,
    FrontendComponent,
    MdmodelComponent
  ]
})
export class FrontendModule { }
