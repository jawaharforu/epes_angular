import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';

import { FeaturesComponent } from './features.component';
import { FeaturesBannerComponent } from './features-banner/features-banner.component';

const router: Routes = [
  { path : '', component : FeaturesComponent },
  { path : ':faqid', component : FeaturesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
	FeaturesComponent,
	FeaturesBannerComponent
  ]
})
export class FeaturesModule { }
