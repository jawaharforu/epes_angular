import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaqCategoryComponent } from './faq-category/faq-category.component';
import { FaqComponent } from './faq/faq.component';
import { FaqListComponent } from './faq-list/faq-list.component';

const router: Routes = [
  { path : 'category', component : FaqCategoryComponent  },
  { path : '', component : FaqComponent  },
  { path : 'list', component : FaqListComponent  },
  { path : 'edit/:faqid', component : FaqComponent  }
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModulesPro.forRoot(),
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [FaqCategoryComponent, FaqComponent, FaqListComponent]
})
export class FaqModule { }
