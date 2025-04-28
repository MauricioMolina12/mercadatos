import { ChangeDetectionStrategy, Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-services-list',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.scss',
})
export class ServicesListComponent {
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

  services = [
    {
      label: 'Servicios en gestión documental',
      href: '#service1',
      ariaLabel: 'Ir a la sección de servicios en gestión documental',
      image: 'assets/gestion-documental.jpg',
      color: '#A2C6F5',
      description:
        'Organizamos, digitalizamos y gestionamos tu documentación para asegurar acceso eficiente y cumplimiento normativo.',
    },
    {
      label: 'Investigación y estudios de mercado',
      href: '#service2',
      ariaLabel:
        'Ir a la sección de servicio de investigación y estudios de mercado',
      image: 'assets/estudio-mercado.jpeg',
      color: '#C5B4E3',
      description:
        'Brindamos análisis detallados del mercado y comportamiento del consumidor para apoyar tus decisiones estratégicas.',
    },
    {
      label: 'Impresos gráficos',
      href: '#service3',
      ariaLabel: 'Ir a la sección de servicio de impresos gráficos',
      image: 'assets/impresos-graficos.png',
      color: '#F5B4CF',
      description:
        'Diseñamos y producimos material impreso de alta calidad, desde folletos hasta papelería corporativa personalizada.',
    },
    {
      label: 'Representación legal, asesorías y consultorías jurídicas',
      href: '#service4',
      ariaLabel:
        'Ir a la sección de servicio de representación legal, asesorías y consultorías jurídicas',
      image: 'assets/asesoria.jpg',
      color: '#B8E3C1',
      description:
        'Asesoramos y representamos legalmente a tu organización con soluciones jurídicas a la medida de tus necesidades.',
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
}
