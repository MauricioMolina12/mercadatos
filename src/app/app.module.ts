import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './shared/components/hero-section/hero-section.component';
import { OurCustomersComponent } from './shared/components/our-customers/our-customers.component';
import { FaqComponent } from './shared/components/faq/faq.component';
import { WhyChooseUsComponentComponent } from './shared/components/why-choose-us-component/why-choose-us-component.component';
import { VideoPlayerComponent } from "./shared/components/video-player/video-player.component";
import { BusinessInfoComponent } from './shared/components/business-info/business-info.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesListComponent } from './shared/components/services-list/services-list.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroSectionComponent,
    OurCustomersComponent,
    FaqComponent,
    WhyChooseUsComponentComponent,
    BusinessInfoComponent,
    AboutUsComponent,
    ServicesListComponent,
    CustomersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoPlayerComponent,
    ReactiveFormsModule
],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
