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

interface faq {
  question: string;
  answer: string;
  isOpen: boolean;
}

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

  faqs: faq[] = [
    {
      question: '¿Cómo inicio un proyecto con ustedes?',
      answer:
        'Puedes contactarnos por teléfono, correo o a través del formulario web. Enviaremos un equipo calificado para diagnosticar tus necesidades y proponer una solución adaptada.',
      isOpen: false,
    },
    {
      question:
        '¿A qué tipo de empresas prestan servicio? ¿Tienen experiencia certificada?',
      answer:
        'Atendemos a entidades tanto públicas como privadas en sectores como salud, educación, administración pública, corporativo, etc. Estamos certificados bajo ISO 9001 y reconocidos por Icontec/IQNet .',
      isOpen: false,
    },
    {
      question: '¿Tienen proyectos de responsabilidad social o innovación?',
      answer:
        'Como empresa BIC, promovemos prácticas de beneficio colectivo. Tenemos documentos y artículos en nuestra sección “Opinión & RSE” que reflejan nuestro compromiso social e institucional ',
      isOpen: false,
    },
    {
      question: '¿Qué garantías ofrecen en seguridad y confidencialidad?',
      answer:
        'Contamos con protocolos certificados bajo ISO 9001, procesos auditados regularmente y cumplimiento estricto de leyes como la Ley 1581 de protección de datos personales. Además, nuestros sistemas están diseñados para garantizar la integridad y acceso controlado a la información.',
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

  toggleAnswer(faq: faq): void {
    if (faq.isOpen) {
      faq.isOpen = false;
      return;
    }

    this.faqs.forEach((faq) => (faq.isOpen = false));

    faq.isOpen = true;
  }

  getFaq(index: number): faq {
    return this.faqs[index];
  }
}
