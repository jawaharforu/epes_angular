import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddJdComponent } from './add-jd/add-jd.component';
import { EditJdComponent } from './edit-jd/edit-jd.component';

const routes: Routes = [
  {
    path: '',
    component: AddJdComponent
  },
  {
    path: 'assign',
    component: EditJdComponent
  }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
