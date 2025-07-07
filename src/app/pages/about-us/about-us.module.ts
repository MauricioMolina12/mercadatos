import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SliderImagesComponent } from '../../shared/components/slider-images/slider-images.component';
import { GridComponent } from '../../shared/components/grid/grid.component';
import { PdfCarouselComponent } from "../../shared/components/pdf-carousel/pdf-carousel.component";
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';
import { ViewDetailsTimelineComponent } from "../../shared/components/view-details-timeline/view-details-timeline.component";


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SliderImagesComponent,
    GridComponent,
    PdfCarouselComponent,
    TimelineComponent,
    ViewDetailsTimelineComponent
]
})
export class AboutUsModule { }
