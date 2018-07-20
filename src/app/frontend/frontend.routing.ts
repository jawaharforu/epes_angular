import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { MdmodelComponent } from './mdmodel/mdmodel.component';

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
      { path: 'registration', loadChildren: './registration/registration.module#RegistrationModule' },
      { path: 'customer-experience', loadChildren: './customer-experience/customer-experience.module#CustomerExperienceModule' },
      { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
      { path: 'support-services', loadChildren: './support/support.module#SupportModule' },
      { path: 'partner-with-us', loadChildren: './partner-with-us/partner-with-us.module#PartnerWithUsModule' },
      { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
      { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'mdmodel', component: MdmodelComponent }
    ]
   }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
