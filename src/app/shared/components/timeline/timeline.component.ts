import { DOCUMENT, isPlatformBrowser, NgClass, NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { timeline } from '../../models/timeline';
import { timelineHistory } from './timeline.data';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements AfterViewInit, OnDestroy, OnInit {
  @Input() startYear = 2000;
  @Input() endYear = new Date().getFullYear();
  @Input() step = 5;
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;
  @Output() emitTimeline = new EventEmitter<timeline>();

  constructor(
    private themeService: ThemeService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  public timeline: timeline[] = timelineHistory;
  get timelineData(): timeline[] {
    return this.timeline;
  }

  private scrollSub?: Subscription;
  ngAfterViewInit(): void {
    if (this.elementsParallax.length) {
      this.checkElementsVisibility();
      this.scrollSub = fromEvent(window, 'scroll')
        .pipe(throttleTime(70))
        .subscribe(() => {
          this.checkElementsVisibility();
        });
    }
  }

  isDark!: boolean;
  ngOnInit(): void {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  ngOnDestroy(): void {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();
    }
  }

  private checkElementsVisibility() {
    if (isPlatformBrowser(this.platformId)) {
      this.elementsParallax.forEach((elementRef: ElementRef) => {
        const rect = elementRef.nativeElement.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || this.document.documentElement.clientHeight;

        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const elementHeight = rect.height;

        if (visibleHeight > elementHeight * 0.2) {
          this.renderer.addClass(elementRef.nativeElement, 'visible');
        }
      });
    }
  }
}
