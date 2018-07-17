import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';

import { FaqsComponent } from './faqs.component';
import { FaqsBannerComponent } from './faqs-banner/faqs-banner.component';
import { FaqsQuestionsComponent } from './faqs-questions/faqs-questions.component';
import { FaqsCategoryComponent } from './faqs-category/faqs-category.component';

const router: Routes = [
  { path : '', component : FaqsComponent  },
];


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router)
  ],
  declarations: [
    FaqsComponent,
    FaqsBannerComponent,
    FaqsQuestionsComponent,
    FaqsCategoryComponent
  ]
})
export class FaqsModule { }
