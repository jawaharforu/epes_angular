import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard'; 
import { WhitepaperListComponent } from './whitepaper-list/whitepaper-list.component';
import { DataTablesModule } from '../../../../../node_modules/angular-datatables';
import { ReactiveFormsModule, FormsModule } from '../../../../../node_modules/@angular/forms';


const router: Routes = [
  { path : '', component : WhitepaperListComponent  },
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
    WhitepaperListComponent
  ]
})
export class WhitepaperModule { }
