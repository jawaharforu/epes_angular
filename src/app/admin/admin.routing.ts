import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ApproverComponent } from './approver/approver.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'approver',
        component: ApproverComponent,
      },
      {
        path: 'jd',
        loadChildren: './JD/jd.module#JdModule',
      },
      {
        path: 'scale',
        loadChildren: './scale/scale.module#ScaleModule',
      },
      {
        path: 'header',
        loadChildren: './header/header.module#HeaderModule',
      },
      {
        path: 'question',
        loadChildren: './question/question.module#QuestionModule',
      },
      {
        path: 'organogram',
        loadChildren: './organogram/organogram.module#OrganogramModule',
      },
      {
        path: 'testimonial',
        loadChildren: './frontend/testimonial/testimonial.module#TestimonialModule',
      },
      {
        path: 'product',
        loadChildren: './frontend/product/product.module#ProductModule',
      },
      {
        path: 'feature',
        loadChildren: './frontend/feature/feature.module#FeatureModule',
      },
      {
        path: 'faq',
        loadChildren: './frontend/faq/faq.module#FaqModule',
      }
    ]
   }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
