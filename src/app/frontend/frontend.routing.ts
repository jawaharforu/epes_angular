import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendComponent,
    children: [
      { path: '', loadChildren: './home/home.module#HomeModule' },
      { path: 'products', loadChildren: './products/products.module#ProductsModule' },
      { path: 'faqs', loadChildren: './faqs/faqs.module#FaqsModule' },
      { path: 'product-tour', loadChildren: './product-tour/product-tour.module#ProductTourModule' },
      { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
      { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
      { path: 'resources', loadChildren: './resources/resources.module#ResourcesModule' },
      { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' }
    ]
   }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
