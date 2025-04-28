import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutUsComponent } from '../../pages/about-us/about-us.component';
import { ServicesListComponent } from '../../shared/components/services-list/services-list.component';
import { CustomersComponent } from '../../pages/customers/customers.component';

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
        component: AboutUsComponent
      },
      {
        path: 'services',
        component: ServicesListComponent
      },
      {
        path: 'customers',
        component: CustomersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
