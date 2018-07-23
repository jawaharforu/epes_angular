import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './frontend/frontend.module#FrontendModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'login', loadChildren: './frontend/login/login.module#LoginModule' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
