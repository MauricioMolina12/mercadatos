import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  bicResults: {image: string; name: string;}[] = [
    {
      image: 'https://mercadatos.com.co/wp-content/uploads/2023/09/BIC2023-5-640x640.jpg',
      name: 'Reconocimiento Cámara de Comercio y Confecamaras 2023'
    },
    {
      image: 'https://mercadatos.com.co/wp-content/uploads/2023/09/BIC2023-1-640x640.jpg',
      name: 'Reconocimiento Cámara de Comercio y Confecamaras 2023'
    },
    {
      image: 'https://mercadatos.com.co/wp-content/uploads/2023/09/BIC2023-4-640x640.jpg',
      name: 'Reconocimiento Cámara de Comercio y Confecamaras 2023'
    },
    {
      image: 'https://mercadatos.com.co/wp-content/uploads/2023/04/DSC0134-640x640.jpg',
      name: 'Reconocimiento ExpoBIC 2022'
    },
    {
      image: 'https://mercadatos.com.co/wp-content/uploads/2022/04/3516e3e7-085d-4987-9b17-cd8491078d2c-640x640.jpg',
      name: 'Stand ExpoBIC 2022'
    },
    {
      image:'https://mercadatos.com.co/wp-content/uploads/2022/04/6EE00082-3E8B-4B59-83D9-A0519959B108-1-640x640.jpg',
      name: 'Reconocimiento ExpoBIC 2022'
    },
    {
      image: 'https://mercadatos.com.co/wp-content/uploads/2022/04/AnyConv.com__IMG_0325-640x640.jpg',
      name: 'Vivencias ExpoBIC 2022'
    },
    {
      image:'https://mercadatos.com.co/wp-content/uploads/2022/04/AnyConv.com__IMG_0257-1-640x640.jpg',
      name: 'Vivencias ExpoBIC 2022'
    },
    {
      image: 'https://mercadatos.com.co/wp-content/uploads/2022/04/AnyConv.com__IMG_0324-640x640.jpg',
      name: 'Vivencias ExpoBIC 2022'
    }

  ];

  beginning = [
    {
      text: 'Compromiso con la calidad',
      icon: 'verified' // verificado o calidad certificada
    },
    {
      text: 'Visión estratégica y objetivos claros',
      icon: 'visibility' // visión
    },
    {
      text: 'Aprendizaje y formación continua',
      icon: 'school' // educación, formación
    },
    {
      text: 'Constancia y dedicación',
      icon: 'schedule' // constancia, tiempo, esfuerzo
    },
    {
      text: 'Identidad y buen clima organizacional',
      icon: 'diversity_3' // trabajo en equipo, cultura
    },
    {
      text: 'Responsabilidad Social y Empresarial',
      icon: 'public' // compromiso con el entorno
    }
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
