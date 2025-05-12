import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../../pages/home/home.component';
import { ServicesListComponent } from '../../shared/components/services-list/services-list.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        loadChildren: ()=> import('../../pages/about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'services/:id',
        loadChildren: ()=> import('../../pages/services/services.module').then(m => m.ServicesModule)
      },
      {
        path: 'customers',
        loadChildren: ()=> import('../../pages/customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'contact',
        loadChildren: ()=> import('../../pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'news',
        loadChildren: ()=> import('../../pages/news/news.module').then(m=> m.NewsModule)
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
