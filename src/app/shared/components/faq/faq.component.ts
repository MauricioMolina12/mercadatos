import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-faq',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  isDark: boolean = false;
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;

  constructor(
    private themeService: ThemeService,
    private utilsService: UtilsService,
    private renderer: Renderer2
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  faqs = [
    {
      question: '¿Cómo puedo contactarlos?',
      answer:
        'Puedes contactarnos a través de nuestro correo electrónico o número de teléfono.',
      isOpen: false,
    },
    {
      question: '¿Cuáles son sus horarios de atención?',
      answer:
        'Nuestros horarios de atención son de lunes a viernes de 9:00 AM a 6:00 PM.',
      isOpen: false,
    },
    {
      question: '¿Dónde están ubicados?',
      answer:
        'Nos encontramos en la calle principal, en el centro de la ciudad.',
      isOpen: false,
    },
    {
      question: '¿Puedo hacer compras en línea?',
      answer:
        'Sí, contamos con una plataforma de compras en línea. Visita nuestra tienda en línea para más detalles.',
      isOpen: false,
    },
  ];

  ngAfterViewInit(): void {
    if (this.elementsParallax.length) {
      this.utilsService.parallaxEffect(this.elementsParallax, 0.2);
    } else {
      this.elementsParallax.toArray().forEach((elementRef: ElementRef) => {
        this.renderer.addClass(elementRef.nativeElement, 'active');
      });
    }
  }

  toggleAnswer(faq: any): void {
    faq.isOpen = !faq.isOpen;
  }
}
