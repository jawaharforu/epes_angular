import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const router: Routes = [
  {
    path: '',
    redirectTo: 'testimonial',
    pathMatch: 'full'
  },
  {
    path: 'testimonial',
    loadChildren: './testimonial/testimonial.module#TestimonialModule',
  },
  {
    path: 'product',
    loadChildren: './product/product.module#ProductModule',
  },
  {
    path: 'feature',
    loadChildren: './feature/feature.module#FeatureModule',
  },
  {
    path: 'faq',
    loadChildren: './faq/faq.module#FaqModule',
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule',
  },
  {
    path: 'roadmap',
    loadChildren: './productroadmap/productroadmap.module#ProductroadmapModule',
  },
  {
    path: 'press-release',
    loadChildren: './pressrelease/pressrelease.module#PressreleaseModule',
  },
  {
    path: 'whitepaper',
    loadChildren: './whitepaper/whitepaper.module#WhitepaperModule',
  },
  {
    path: 'career',
    loadChildren: './career/career.module#CareerModule',
  },
  {
    path: 'contactus',
    loadChildren: './contactus/contactus.module#ContactusModule',
  },
  {
    path: 'producttour',
    loadChildren: './producttour/producttour.module#ProducttourModule',
  },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ ]
})
export class FrontModule { }
