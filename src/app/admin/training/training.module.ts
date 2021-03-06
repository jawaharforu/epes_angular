import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { CKEditorModule } from '../../../../node_modules/ng2-ckeditor';
import { TrainingComponent } from './training.component';
import { BudgetPlanningComponent } from './budget-planning/budget-planning.component';
import { BudgetmasterComponent } from './budgetmaster/budgetmaster.component';
import { AddsubheadsComponent } from './addsubheads/addsubheads.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ParentComponent } from './parent/parent.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path : '', component : TrainingComponent  },
      { path : 'budgetplanning', component : BudgetPlanningComponent  },
      { path : 'budgetmaster', component : BudgetmasterComponent  },
      { path : 'addsubheads', component : AddsubheadsComponent  },
      { path : 'budgetplanning/:budgetid', component : BudgetPlanningComponent  },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    DataTablesModule,
    CKEditorModule
  ],
  declarations: [
    TrainingComponent,
    BudgetPlanningComponent,
    BudgetmasterComponent,
    AddsubheadsComponent,
    SubmenuComponent,
    ParentComponent,
  ]
})
export class TrainingModule { }
