import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-hero-news',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero-news.component.html',
  styleUrls: ['./hero-news.component.scss'],
})
export class HeroNewsComponent implements OnInit {
  @Input() sliderAds: any[] = [];
  visibleAds: any[] = [];

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  async ngOnInit() {
    if (this.sliderAds.length > 0) {
      this.handleSlideChange();
      this.setClassToFirstElement();
      this.handleSlideAutomatic();
    }
  }

  setBackgroundImage = (containerClass: string, image: string) => {
    const hero = this.elRef.nativeElement.querySelector(`.${containerClass}`);
    if (hero) {
      this.renderer.setStyle(hero, 'background-image', `url(${image})`);
    }
  };

  currentSlide: number = 0;
  nextSlide() {
    if (this.currentSlide < this.sliderAds.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
    this.handleSlideChange();
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else if (this.currentSlide === 0) {
      this.currentSlide = this.sliderAds.length - 1;
    }
    this.handleSlideChange();
  }

  async setClassToFirstElement() {
    const sliderOptions = this.elRef.nativeElement.querySelectorAll(
      '.hero-slider__option'
    );
    const sliderOptionActive = (await sliderOptions[0]) as HTMLElement;
    this.renderer.addClass(sliderOptionActive, 'active');
  }

  handleSlideAutomatic() {
    let timeChangeSlider = 10000;
    setInterval(() => {
      if (this.currentSlide < this.sliderAds.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
      this.handleSlideChange();
    }, timeChangeSlider);
  }

  updateSlide() {
    this.handleSlideChange();
  }

  updateSlideWithId(id: number) {
    this.currentSlide = id;
    this.handleSlideChange();
  }

  handleSlideChange() {
    const sliderOptions = this.elRef.nativeElement.querySelectorAll(
      '.hero-slider__option'
    );
    const sliderOptionActive = sliderOptions[this.currentSlide] as HTMLElement;
    sliderOptions.forEach((el: HTMLElement) => {
      this.renderer.removeClass(el, 'active');
    });
    this.renderer.addClass(sliderOptionActive, 'active');
    this.setNextItem();
  }

  currentTitle = signal<string>('');
  currentDescription = signal<string>('');
  setNextItem() {
    const currentItem = this.sliderAds[this.currentSlide];
    this.setBackgroundImage('hero', currentItem.image);
    this.currentTitle.set(currentItem.title);
    this.currentDescription.set(currentItem.description);
  }
}
