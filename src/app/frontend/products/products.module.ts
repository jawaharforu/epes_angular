import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';

import { ProductsComponent } from './products.component';
import { ProductBannerComponent } from './product-banner/product-banner.component';
import { ProductsFeaturesComponent } from './products-features/products-features.component';

const router: Routes = [
  { path : '', component : ProductsComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
    ProductsComponent,
    ProductBannerComponent,
    ProductsFeaturesComponent
  ]
})
export class ProductsModule { }
