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

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./about-us.component.scss'],
  standalone: false,
})
export class AboutUsComponent implements OnInit{
  isDark: boolean = false;
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;

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
    const dataSeo: SeoData = {title: 'NOSOTROS - MERCADATOS SAS', description: 'Somos una empresa fundada en Barranquilla en 1986, líder en ofrecer Soluciones Integrales, prestándole un servicio óptimo, seguro, rápido, en calidad y cumplimiento; apoyados en procedimientos, herramientas y modelos innovadores y eficaces, claves para el éxito.'}
    this.seoService.updateSeoTags(dataSeo);
  }

  ngAfterViewInit(): void {
    if (this.elementsParallax.length) {
      this.utilsService.parallaxEffect(this.elementsParallax, 0.2);
    } else {
      this.elementsParallax.toArray().forEach((elementRef: ElementRef) => {
        this.renderer.addClass(elementRef.nativeElement, 'active');
      });
    }
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

  beginning = [
    {
      text: 'Compromiso con la calidad',
      icon: 'verified', // verificado o calidad certificada
    },
    {
      text: 'Visión estratégica y objetivos claros',
      icon: 'visibility', // visión
    },
    {
      text: 'Aprendizaje y formación continua',
      icon: 'school', // educación, formación
    },
    {
      text: 'Constancia y dedicación',
      icon: 'schedule', // constancia, tiempo, esfuerzo
    },
    {
      text: 'Identidad y buen clima organizacional',
      icon: 'diversity_3', // trabajo en equipo, cultura
    },
    {
      text: 'Responsabilidad Social y Empresarial',
      icon: 'public', // compromiso con el entorno
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
}
