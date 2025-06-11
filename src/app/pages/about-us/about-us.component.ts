import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { UtilsService } from '../../shared/services/utils.service';
import { SeoService } from '../../shared/services/seo.service';
import { SeoData } from '../../shared/models/seo';
import { fromEvent, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./about-us.component.scss'],
  standalone: false,
})
export class AboutUsComponent implements OnInit {
  isDark: boolean = false;
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;
  private scrollSub?: Subscription;

  @ViewChildren('aboutUsTeamGridItem')
  elementsGrid!: QueryList<ElementRef>;

  constructor(
    private themeService: ThemeService,
    private utilsService: UtilsService,
    private renderer: Renderer2,
    private seoService: SeoService
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  ngOnInit(): void {
    const dataSeo: SeoData = {
      title: 'NOSOTROS - MERCADATOS SAS',
      description:
        'Somos una empresa fundada en Barranquilla en 1986, líder en ofrecer Soluciones Integrales, prestándole un servicio óptimo, seguro, rápido, en calidad y cumplimiento; apoyados en procedimientos, herramientas y modelos innovadores y eficaces, claves para el éxito.',
    };
    this.seoService.updateSeoTags(dataSeo);
  }

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

  private checkElementsVisibility() {
    this.elementsParallax.forEach((elementRef: ElementRef) => {
      const rect = elementRef.nativeElement.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const elementHeight = rect.height;

      if (visibleHeight > elementHeight * 0.2) {
        this.renderer.addClass(elementRef.nativeElement, 'visible');
      }
    });
  }

  bicResults: { image: string; name: string }[] = [
    {
      image: 'assets/awards1.jpg',
      name: 'Reconocimiento Cámara de Comercio y Confecamaras 2023',
    },
    {
      image: 'assets/awards2.jpg',
      name: 'Reconocimiento Cámara de Comercio y Confecamaras 2023',
    },
    {
      image: 'assets/awards3.jpg',
      name: 'Reconocimiento Cámara de Comercio y Confecamaras 2023',
    },
    {
      image: 'assets/awards4.jpg',
      name: 'Reconocimiento ExpoBIC 2022',
    },
    {
      image: 'assets/awards5.jpg',
      name: 'Stand ExpoBIC 2022',
    },
    {
      image: 'assets/awards6.jpg',
      name: 'Reconocimiento ExpoBIC 2022',
    },
    {
      image: 'assets/awards7.jpg',
      name: 'Vivencias ExpoBIC 2022',
    },
    {
      image: 'assets/awards8.jpg',
      name: 'Vivencias ExpoBIC 2022',
    },
    {
      image: 'assets/awards9.jpg',
      name: 'Vivencias ExpoBIC 2022',
    },
  ];

  ourTeam: { image: string; name: string; description: string }[] = [
    {
      image: 'assets/team-pictures/elvis-ruiz.webp',
      name: 'Elvis Ruiz',
      description: 'Gerente',
    },
    {
      image: 'assets/team-pictures/johana-ruiz.webp',
      name: 'Johana Ruiz',
      description: 'Gerente administrativa y financiera',
    },
    {
      image: 'assets/team-pictures/steven-ruiz.webp',
      name: 'Steven Ruiz',
      description: 'Líder de infrastructura y tecnología',
    },
    {
      image: 'assets/team-pictures/elvis-andres.webp',
      name: 'Elvis Andrés Ruíz',
      description: 'Gerente y Jefe de oficina jurídica',
    },
    {
      image: 'assets/team-pictures/maria-fernanda-martinez.webp',
      name: 'María Martínez',
      description: 'Gerente de proyectos',
    },
    {
      image: 'assets/team-pictures/marta-ariza.webp',
      name: 'Marta Ariza',
      description: 'Líder de proyectos',
    },
    {
      image: 'assets/team-pictures/lina-mejia.webp',
      name: 'Lina Mejía',
      description: 'Líder de talento humano',
    },
    {
      image: 'assets/team-pictures/melisa-escolar.webp',
      name: 'Melisa Escolar',
      description: 'Asistente administrativa',
    },
  ];

  beginning = [
    {
      text: 'Compromiso con la calidad',
      icon: 'verified',
    },
    {
      text: 'Visión estratégica y objetivos claros',
      icon: 'visibility',
    },
    {
      text: 'Aprendizaje y formación continua',
      icon: 'school',
    },
    {
      text: 'Constancia y dedicación',
      icon: 'schedule',
    },
    {
      text: 'Identidad y buen clima organizacional',
      icon: 'diversity_3',
    },
    {
      text: 'Responsabilidad Social y Empresarial',
      icon: 'public',
    },
  ];

  files: { name: string; year: number; path: string }[] = [
    {
      name: 'INFORME DE GESTIÓN BIC',
      year: 2021,
      path: 'https://mercadatos.com.co/wp-content/uploads/2022/06/INFORME-DE-GESTION-BIC-Mercadatos-S.A.S.-BIC-2021-1.pdf',
    },
    {
      name: 'INFORME DE GESTIÓN BIC',
      year: 2022,
      path: 'https://mercadatos.com.co/wp-content/uploads/2023/05/INFORME-DE-GESTION-BIC-MERCADATOS-SAS-BIC-2022.pdf',
    },
    {
      name: 'INFORME DE GESTIÓN BIC',
      year: 2023,
      path: 'https://mercadatos.com.co/wp-content/uploads/2024/04/INFORME_DE_GESTION_BIC_MERCADATOS_SAS_BIC_2023.pdf',
    },
    {
      name: 'INFORME DE GESTIÓN BIC',
      year: 2024,
      path: 'https://mercadatos.com.co/wp-content/uploads/2025/05/INFORME-DE-GESTION-BIC-MERCADATOS-SAS-BIC-2024.pdf',
    },
  ];

  currentSlide = 0;

  nextSlide() {
    if (this.currentSlide < this.bicResults.length - 1) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  handleHover(event: MouseEvent) {
    const hovered = event.currentTarget as HTMLElement;

    this.elementsGrid.forEach((elRef) => {
      const element = elRef.nativeElement as HTMLElement;
      if (element !== hovered) {
        element.classList.add('grayscale');
      } else {
        element.classList.remove('grayscale');
      }
    });
  }

  resetHover() {
    this.elementsGrid.forEach((elRef) => {
      elRef.nativeElement.classList.remove('grayscale');
    });
  }
}
