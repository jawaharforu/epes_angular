import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { ProductTourComponent } from './product-tour.component';
import { ProductTourBannerComponent } from './product-tour-banner/product-tour-banner.component';
import { ProductTourContentComponent } from './product-tour-content/product-tour-content.component';

const router: Routes = [
  { path : '', component : ProductTourComponent  },
];


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
    ProductTourComponent,
    ProductTourBannerComponent,
    ProductTourContentComponent
  ]
})
export class ProductTourModule { }
