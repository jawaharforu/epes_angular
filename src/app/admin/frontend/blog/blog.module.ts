import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';


import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModulesPro } from '../../../../../ng-uikit-pro-standard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { DataTablesModule } from '../../../../../node_modules/angular-datatables';
import { CKEditorModule } from '../../../../../node_modules/ng2-ckeditor';
import { SubmenuComponent } from './submenu/submenu.component';
import { ParentComponent } from './parent/parent.component';

const router: Routes = [
  {
    path : '',
    component : ParentComponent,
    children: [
      { path : '', component : BlogComponent  },
      { path : 'list', component : BlogListComponent  },
      { path : 'edit/:blogid', component : BlogComponent  }
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
    BlogListComponent,
    BlogComponent,
    SubmenuComponent,
    ParentComponent
  ]
})
export class BlogModule { }
