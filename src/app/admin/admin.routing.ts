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
      },
      {
        path: 'blog',
        loadChildren: './frontend/blog/blog.module#BlogModule',
      },
      {
        path: 'roadmap',
        loadChildren: './frontend/productroadmap/productroadmap.module#ProductroadmapModule',
      },
      {
        path: 'press-release',
        loadChildren: './frontend/pressrelease/pressrelease.module#PressreleaseModule',
      },
      {
        path: 'whitepaper',
        loadChildren: './frontend/whitepaper/whitepaper.module#WhitepaperModule',
      },
      {
        path: 'career',
        loadChildren: './frontend/career/career.module#CareerModule',
      },
      {
        path: 'contactus',
        loadChildren: './frontend/contactus/contactus.module#ContactusModule',
      },
      {
        path: 'department',
        loadChildren: './department/department.module#DepartmentModule',
      },
      {
        path: 'company',
        loadChildren: './company/company.module#CompanyModule',
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
      },
      {
        path: 'producttour',
        loadChildren: './frontend/producttour/producttour.module#ProducttourModule',
      },
      {
        path: 'training',
        loadChildren: './training/training.module#TrainingModule',
      },
      {
        path: 'companyinfo',
        loadChildren: './settings/company-information/company-information.module#CompanyInformationModule',
      },
      {
        path: 'email',
        loadChildren: './settings/email/email.module#EmailModule',
      },
      {
        path: 'email-template',
        loadChildren: './settings/email-template/email-template.module#EmailTemplateModule',
      },
      {
        path: 'subscriptioninfo',
        loadChildren: './settings/subscription-info/subscription-info.module#SubscriptionInfoModule',
      },
      {
        path: 'appraisal',
        loadChildren: './settings/appraisal/appraisal.module#AppraisalModule',
      },
      {
        path: 'general-settings',
        loadChildren: './settings/general-settings/general-settings.module#GeneralSettingsModule',
      },
      {
        path: 'employee',
        loadChildren: './master/employee/employee.module#EmployeeModule',
      },
      {
        path: 'assessment',
        loadChildren: './assessment/assessment.module#AssessmentModule',
      },
      {
        path: 'assigntoJD',
        loadChildren: './master/assign-jd/assign-jd.module#AssignJDModule',
      }
    ]
   }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
