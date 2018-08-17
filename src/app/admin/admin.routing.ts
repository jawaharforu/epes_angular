import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'approver',
        loadChildren: './master/approver/approver.module#ApproverModule',
      },
      {
        path: 'jd',
        loadChildren: './master/JD/jd.module#JdModule',
      },
      {
        path: 'assessmenttype',
        loadChildren: './master/assessmenttype/assessmenttype.module#AssessmenttypeModule',
      },
      {
        path: 'header',
        loadChildren: './master/header/header.module#HeaderModule',
      },
      {
        path: 'scale',
        loadChildren: './master/scale/scale.module#ScaleModule',
      },
      {
        path: 'question',
        loadChildren: './master/question/question.module#QuestionModule',
      },
      {
        path: 'department',
        loadChildren: './master/department/department.module#DepartmentModule',
      },
      {
        path: 'organogram',
        loadChildren: './master/organogram/organogram.module#OrganogramModule',
      },
      {
        path: 'employee',
        loadChildren: './master/employee/employee.module#EmployeeModule',
      },
      {
        path: 'assignjd',
        loadChildren: './master/assign-jd/assign-jd.module#AssignJDModule',
      },
      {
        path: 'weightage',
        loadChildren: './master/weightage/weightage.module#WeightageModule',
      },
      {
        path: 'assessment',
        loadChildren: './assessment/assessment.module#AssessmentModule',
      },
      {
        path: 'training',
        loadChildren: './training/training.module#TrainingModule',
      },
      {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule',
      },
      {
        path: 'hrindex',
        loadChildren: './hrindex/hrindex.module#HrindexModule',
      },
      {
        path: 'frontend',
        loadChildren: './frontend/front.module#FrontModule',
      },
      {
        path: 'assessmenttype',
        loadChildren: './master/assessmenttype/assessmenttype.module#AssessmenttypeModule',
      },

    ]
   }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
