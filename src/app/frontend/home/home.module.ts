import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { OurfeaturesComponent } from './ourfeatures/ourfeatures.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { VoluptatemComponent } from './voluptatem/voluptatem.component';
import { OurcustomersComponent } from './ourcustomers/ourcustomers.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewlinePipe } from '../../pipes/newline.pipe';

const router: Routes = [
  { path : '', component : HomeComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    OurfeaturesComponent,
    OurproductComponent,
    VoluptatemComponent,
    OurcustomersComponent,
    TestimonialsComponent,
    NewlinePipe
  ]
})
export class HomeModule { }
