import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SplashPageComponent } from '../../shared/components/splash-page/splash-page.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NavBarComponent,
    FooterComponent,
    SplashPageComponent,
  ]
})
export class LayoutModule { }
