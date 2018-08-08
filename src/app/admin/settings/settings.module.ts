import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmenuComponent } from './submenu/submenu.component';
import { ParentComponent } from './parent/parent.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      {
        path: '',
        redirectTo: 'companyinfo',
        pathMatch: 'full'
      },
      {
        path: 'companyinfo',
        loadChildren: './company-information/company-information.module#CompanyInformationModule',
      },
      {
        path: 'email',
        loadChildren: './email/email.module#EmailModule',
      },
      {
        path: 'email-template',
        loadChildren: './email-template/email-template.module#EmailTemplateModule',
      },
      {
        path: 'subscriptioninfo',
        loadChildren: './subscription-info/subscription-info.module#SubscriptionInfoModule',
      },
      {
        path: 'appraisal',
        loadChildren: './appraisal/appraisal.module#AppraisalModule',
      },
      {
        path: 'general-settings',
        loadChildren: './general-settings/general-settings.module#GeneralSettingsModule',
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SubmenuComponent,
    ParentComponent
  ]
})
export class SettingsModule { }
