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
      { path: 'blog', loadChildren: './blogs/blogs.module#BlogsModule' },
      { path: 'resources', loadChildren: './resources/resources.module#ResourcesModule' },
      { path: 'registration/:productid', loadChildren: './registration/registration.module#RegistrationModule' },
      { path: 'customer-experience', loadChildren: './customer-experience/customer-experience.module#CustomerExperienceModule' },
      { path: 'careers', loadChildren: './careers/careers.module#CareersModule' },
      { path: 'support-services', loadChildren: './support/support.module#SupportModule' },
      { path: 'partner-with-us', loadChildren: './partner-with-us/partner-with-us.module#PartnerWithUsModule' },
      { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
      { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
      { path: 'payment', loadChildren: './payment/payment.module#PaymentModule' }
    ]
   }
];

export const Routing: ModuleWithProviders = RouterModule.forChild(routes);
