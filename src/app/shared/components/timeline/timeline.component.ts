import { isPlatformBrowser, NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgFor],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent implements AfterViewInit, OnDestroy {
  @Input() startYear = 2000;
  @Input() endYear = new Date().getFullYear();
  @Input() step = 5;
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  timelineHistory: { year: number; description: string; image: string }[] = [
    {
      year: 1986,
      description:
        'Inicio del rediseño conceptual del sitio web de MERCADATOS SAS BIC con foco en experiencia de usuario y branding.',
      image: 'assets/foto-cofounders.jpg',
    },
    {
      year: 2023,
      description:
        'Investigación de tecnologías modernas para migrar servicios internos y planificación de infraestructura de correo.',
      image: 'assets/foto-mission.jpg',
    },
    {
      year: 2024,
      description:
        'Desarrollo del nuevo sitio web con diseño responsivo, optimización SEO y nuevas funcionalidades orientadas al cliente.',
      image: 'assets/foto-vission.jpg',
    },
    {
      year: 2025,
      description:
        'Lanzamiento oficial del nuevo sitio web y avance en la migración de correos corporativos desde Gmail hacia Outlook.',
      image: 'assets/foto-vission.jpg',
    },
  ];

  private scrollSub?: Subscription;
  ngAfterViewInit(): void {
    if (this.elementsParallax.length) {
      this.checkElementsVisibility();
      this.scrollSub = fromEvent(window, 'scroll')
        .pipe(throttleTime(100))
        .subscribe(() => {
          this.checkElementsVisibility();
        });
    }
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
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

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
