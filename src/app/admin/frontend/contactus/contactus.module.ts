import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactusListComponent } from './contactus-list/contactus-list.component';
import { Routes, RouterModule } from '../../../../../node_modules/@angular/router';
import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard'; 
import { DataTablesModule } from '../../../../../node_modules/angular-datatables';
import { ReactiveFormsModule, FormsModule } from '../../../../../node_modules/@angular/forms';

const router: Routes = [
  { path : '', component : ContactusListComponent  },
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
    ContactusListComponent
  ]
})
export class ContactusModule { }
