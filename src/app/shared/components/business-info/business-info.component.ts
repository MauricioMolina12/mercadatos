import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-business-info',
  standalone: false,
  templateUrl: './business-info.component.html',
  styleUrl: './business-info.component.scss',
})
export class BusinessInfoComponent {
  isDark: boolean = false;

  whatSetsUsApart = [
    {
      icon: 'history',
      title: '+10 años de experiencia',
      subtitle:
        'Hemos acompañado a empresas y organizaciones por más de una década, brindando soluciones con resultados reales.',
      hexColor: '#00BCD4', 
    },
    {
      icon: 'build',
      title: 'Soluciones a medida',
      subtitle:
        'Nos enfocamos en entender tus necesidades específicas para ofrecerte un servicio completamente personalizado.',
      hexColor: '#4CAF50',
    },
    {
      icon: 'group',
      title: 'Equipo multidisciplinario',
      subtitle:
        'Contamos con profesionales de diversas áreas que trabajan en conjunto para ofrecer una visión integral.',
      hexColor: '#FF9800',
    },
    {
      icon: 'memory',
      title: 'Tecnología de vanguardia',
      subtitle:
        'Utilizamos herramientas modernas para garantizar eficiencia, seguridad y calidad en todos nuestros procesos.',
      hexColor: '#673AB7',
    },
    {
      icon: 'star',
      title: 'Compromiso con la excelencia',
      subtitle:
        'No solo cumplimos, buscamos superar tus expectativas en cada proyecto.',
      hexColor: '#FFC107', 
    },
    {
      icon: 'eco',
      title: 'Responsabilidad social y ambiental',
      subtitle:
        'Implementamos prácticas sostenibles y apoyamos iniciativas que generan impacto positivo en la comunidad.',
      hexColor: '#8BC34A', 
    },
  ];

  constructor(private themeService: ThemeService) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }
}
