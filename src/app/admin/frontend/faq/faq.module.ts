import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaqCategoryComponent } from './faq-category/faq-category.component';
import { FaqComponent } from './faq/faq.component';
import { FaqListComponent } from './faq-list/faq-list.component';
import { FaqSubCategoryComponent } from './faq-sub-category/faq-sub-category.component';
import { ParentComponent } from './parent/parent.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { DataTablesModule } from 'angular-datatables';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path : 'category', component : FaqCategoryComponent  },
      { path : 'subcategory', component : FaqSubCategoryComponent  },
      { path : '', component : FaqComponent  },
      { path : 'list', component : FaqListComponent  },
      { path : 'edit/:faqid', component : FaqComponent  }
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
    DataTablesModule
  ],
  declarations: [FaqCategoryComponent, FaqComponent, FaqListComponent, FaqSubCategoryComponent, ParentComponent, SubmenuComponent]
})
export class FaqModule { }
