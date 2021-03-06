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
import { CountUpModule } from 'countup.js-angular2';
import { HRIndexComponent } from './hrindex/hrindex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

const router: Routes = [
  { path : '', component : HomeComponent  },
];

declare var require: any;
export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    CountUpModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    OurfeaturesComponent,
    OurproductComponent,
    VoluptatemComponent,
    OurcustomersComponent,
    TestimonialsComponent,
    NewlinePipe,
    HRIndexComponent
  ]
})
export class HomeModule { }
