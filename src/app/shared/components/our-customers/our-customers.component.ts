import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { UtilsService } from '../../services/utils.service';
import { CustomersService } from '../../services/customers.service';
import { Entity } from '../../models/customers';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-our-customers',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './our-customers.component.html',
  styleUrl: './our-customers.component.scss',
})
export class OurCustomersComponent implements OnInit, OnDestroy {
  isPaused = false;
  isPausedSecond = false;
  isDark: boolean = false;
  private observer!: any;
  customers: Entity[] = [];
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;
  privateCustomers: Entity[] = [];
  publicCustomers: Entity[] = [];

  publicCount = 0;
  privateCount = 0;

  @ViewChild('publicCounter', { static: true }) publicCounterRef!: ElementRef;
  @ViewChild('privateCounter', { static: true }) privateCounterRef!: ElementRef;

  constructor(
    private themeService: ThemeService,
    private utilsService: UtilsService,
    private customersService: CustomersService,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  ngAfterViewInit(): void {
    if (this.elementsParallax.length) {
      this.utilsService.parallaxEffect(this.elementsParallax, 0.2);
    } else {
      this.elementsParallax.toArray().forEach((elementRef: ElementRef) => {
        this.renderer.addClass(elementRef.nativeElement, 'active');
      });
    }
    this.observeCounters();
  }

  animateCounter(type: 'public' | 'private') {
    const target =
      type === 'public'
        ? this.publicCustomers.length
        : this.privateCustomers.length;

    const duration = 1000;
    const startTime = performance.now();

    const easeOut = (t: number): number => 1 - Math.pow(1 - t, 3);

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      const value = Math.floor(easedProgress * target);

      if (type === 'public') {
        this.publicCount = value;
      } else {
        this.privateCount = value;
      }

      this.cdr.markForCheck();

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.publicCustomers = customers.filter((c) => c.type === 'PÚBLICA');
      this.privateCustomers = customers.filter((c) => c.type === 'PRIVADA');
      this.cdr.markForCheck();
    });
  }

  private observeCounters(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (!('IntersectionObserver' in window)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            if (
              target === this.publicCounterRef.nativeElement &&
              this.publicCount === 0
            ) {
              this.animateCounter('public');
            }

            if (
              target === this.privateCounterRef.nativeElement &&
              this.privateCount === 0
            ) {
              this.animateCounter('private');
            }

            this.observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    this.observer.observe(this.publicCounterRef.nativeElement);
    this.observer.observe(this.privateCounterRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer?.disconnect) {
      this.observer.disconnect();
    }
  }

  pauseSlider(slider: string): void {
    switch (slider) {
      case 'first':
        this.isPaused = true;
        break;
      case 'second':
        this.isPausedSecond = true;
        break;
    }
  }

  resumeSlider(slider: string): void {
    switch (slider) {
      case 'first':
        this.isPaused = false;
        break;
      case 'second':
        this.isPausedSecond = false;
        break;
    }
  }
}
