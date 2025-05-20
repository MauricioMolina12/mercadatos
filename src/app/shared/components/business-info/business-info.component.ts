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
  selector: 'app-business-info',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './business-info.component.html',
  styleUrl: './business-info.component.scss',
})
export class BusinessInfoComponent {
  isDark: boolean = false;
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;
  whatSetsUsApart = [
    {
      icon: 'event',
      title: 'Experiencia y Trayectoria',
      subtitle:
        'Contamos con más de 35 años de experiencia ofreciendo soluciones integrales en organización, custodia y conservación documental, lo que nos convierte en pioneros y referentes en la región.',
      hexColor: '#00BCD4',
    },
    {
      icon: 'warehouse',
      title: 'Infraestructura Especializada',
      subtitle:
        'Disponemos de bodegas especialmente acondicionadas para la custodia de archivos, que cumplen con los requisitos técnicos en materia de seguridad, control ambiental y acceso restringido, garantizando la integridad y preservación de los documentos.',
      hexColor: '#673AB7',
    },
    {
      icon: 'group',
      title: 'Talento Humano Calificado',
      subtitle:
        'Nuestro equipo está conformado por profesionales capacitados en procesos archivísticos y en constante formación, lo que nos permite ofrecer un servicio altamente especializado y actualizado según las mejores prácticas del sector.',
      hexColor: '#FF9800',
    },
    {
      icon: 'person',
      title: 'Compromiso con el Cliente',
      subtitle:
        'Brindamos un servicio cercano, ágil y personalizado, orientado a satisfacer las necesidades específicas de cada organización. Nuestra prioridad es generar confianza, eficiencia y seguridad en cada etapa del proceso documental.',
      hexColor: 'rgb(177, 17, 158)',
    },
    {
      icon: 'gavel',
      title: 'Cumplimiento Normativo',
      subtitle:
        'Nuestros procesos están alineados con los lineamientos establecidos por la Ley 594 de 2000 del Archivo General de la Nación, asegurando la correcta administración de la información documental de nuestros clientes, con estándares de calidad y legalidad.',
      hexColor: '#FFC107',
    },
    {
      icon: 'trending_up',
      title: 'Cultura de Mejora Continua',
      subtitle:
        'Implementamos programas permanentes de capacitación y actualización tecnológica, lo que nos permite adaptarnos a los cambios normativos y a las nuevas necesidades del mercado, fortaleciendo así nuestra propuesta de valor.',
      hexColor: '#8BC34A',
    },
  ];

  constructor(
    private themeService: ThemeService,
    private utilsService: UtilsService,
    private renderer: Renderer2
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
    this.updateExperienceYears();
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

  moreYearExperience: number = 0;
  private updateExperienceYears(): void {
    const today = new Date();
    const baseYear = 1986; 

    let yearsDiff = today.getFullYear() - baseYear;

    const jan10 = new Date(today.getFullYear(), 0, 10); 
    if (today < jan10) {
      yearsDiff -= 1;
    }

    const totalExperience = yearsDiff;

    const historyItem = this.whatSetsUsApart.find(
      (item) => item.icon === 'event'
    );
    this.moreYearExperience = totalExperience - 2
    if (historyItem) {
      historyItem.title = `+${totalExperience} años de experiencia`;
      historyItem.subtitle = `Contamos con más de ${this.moreYearExperience} años de experiencia ofreciendo soluciones integrales en organización, custodia y conservación documental, lo que nos convierte en pioneros y referentes en la región.`
    }

  }
}
