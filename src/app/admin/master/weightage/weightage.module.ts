import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeightageComponent } from './weightage/weightage.component';
import { WeightageListComponent } from './weightage-list/weightage-list.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ParentComponent } from './parent/parent.component';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path: '', component: WeightageComponent },
      { path : 'list', component : WeightageListComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [WeightageComponent, WeightageListComponent, SubmenuComponent, ParentComponent]
})
export class WeightageModule { }
