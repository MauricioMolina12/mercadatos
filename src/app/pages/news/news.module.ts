import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { HeroNewsComponent } from '../../shared/components/hero-news/hero-news.component';


@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    HeroNewsComponent
  ]
})
export class NewsModule { }
