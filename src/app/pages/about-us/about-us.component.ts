import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  standalone: false,
})
export class AboutUsComponent {


  isDark: boolean = false;
  constructor(private themeService: ThemeService) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  bicResults = [
    {
      title: 'Impacto Ambiental',
      description: 'Redujimos nuestra huella de carbono en un 35%.',
    },
    {
      title: 'Inclusión Laboral',
      description: 'Incrementamos la diversidad del equipo en un 20%.',
    },
    {
      title: 'Responsabilidad Social',
      description: 'Más de 1000 horas de voluntariado corporativo.',
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
