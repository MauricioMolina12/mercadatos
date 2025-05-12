import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SliderImagesComponent } from '../../shared/components/slider-images/slider-images.component';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { PdfCarouselComponent } from "../../shared/components/pdf-carousel/pdf-carousel.component";


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SliderImagesComponent,
    GridComponent,
    PdfCarouselComponent
]
})
export class AboutUsModule { }
