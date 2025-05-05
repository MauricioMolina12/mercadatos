import { NgClass, NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-slider-images',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './slider-images.component.html',
  styleUrl: './slider-images.component.scss',
})
export class SliderImagesComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() images: { image: string; name: string }[] = [];
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;
  isAtStart = true;
  isAtEnd = false;

  groupedImages: { image: string; name: string }[][] = [];
  currentSlide = 0;

  ngOnInit(): void {
    this.setActiveItem(0);
  }

  ngOnChanges() {
    this.groupImages();
  }

  ngAfterViewInit(): void {}

  groupImages() {
    this.groupedImages = [];
    for (let i = 0; i < this.images.length; i += 3) {
      this.groupedImages.push(this.images.slice(i, i + 3));
    }
    this.currentSlide = 0;
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -220, behavior: 'smooth' });
    setTimeout(() => {
      this.checkScrollPosition();
      this.highlightCenteredItem();
    }, 300);
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 220, behavior: 'smooth' });
    setTimeout(() => {
      this.checkScrollPosition();
      this.highlightCenteredItem();
    }, 300);
  }

  checkScrollPosition() {
    const el = this.carousel.nativeElement;
    const scrollLeft = el.scrollLeft;
    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    this.isAtStart = scrollLeft <= 0;
    this.isAtEnd = scrollLeft >= maxScrollLeft;
  }

  highlightCenteredItem() {
    const carouselEl = this.carousel.nativeElement;
    const items = carouselEl.querySelectorAll('.carousel-item');
    const containerCenter = carouselEl.offsetWidth / 2 + carouselEl.scrollLeft;

    let closestItemIndex = 0;
    let minDistance = Infinity;

    items.forEach((item: HTMLElement, index: number) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(containerCenter - itemCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestItemIndex = index;
      }

      item.classList.remove('active');
    });

    items[closestItemIndex]?.classList.add('active');
  }

  highlightIndexItem(index: number) {
    const item = this.carousel.nativeElement.querySelectorAll('.carousel-item')[index];
    if (item) {
      item.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      this.setActiveItem(index);
    }
  }
  

  setActiveItem(index: number) {
    const items =
      this.carousel.nativeElement.querySelectorAll('.carousel-item');
    items.forEach((item: HTMLElement, i: number) => {
      item.classList.toggle('active', i === index);
    });
  }

  onScrollCarousel() {
    this.checkScrollPosition();
    this.highlightCenteredItem();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScrollPosition();
    this.highlightCenteredItem();
  }
}
