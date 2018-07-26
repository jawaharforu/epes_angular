import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '../../../../../node_modules/@angular/router';
import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard'; 
import { DataTablesModule } from '../../../../../node_modules/angular-datatables';
import { ReactiveFormsModule, FormsModule } from '../../../../../node_modules/@angular/forms';
import { ProducttourListComponent } from './producttour-list/producttour-list.component';

const router: Routes = [
  { path : '', component : ProducttourListComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  declarations: [
    ProducttourListComponent
  ]
})
export class ProducttourModule { }
