import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  scrollDown() {
    window.scrollTo({
      top: window.innerHeight + 40,
      behavior: 'smooth',
    });
  }

  slides = [
    {
      title: 'Servicio en gestión documental',
      description:'Ofrecemos soluciones especializadas para la gestión eficiente de tu información mejorando los procesos, optimizando procedimientos personalizados y ajustados a tus necesidades misionales y legales.',
      image: 'assets/truck-mercadatos.png',
    },
    {
      title: 'Impresos Gráficos',
      description: 'Soluciones en impresos gráficos de alta calidad para comunicar tu marca, promocionar servicios y fortalecer tu presencia corporativa. Diseñamos e imprimimos desde papelería institucional hasta material publicitario.',
      image: 'assets/truck-mercadatos.png',
    },
    {
      title: 'Soluciones integrales',
      description:
        'Integramos tecnología, procesos y talento humano para resolver tus desafíos documentales.',
      image: 'assets/truck-mercadatos.png',
    },
  ];

  intervalId: any;
  currentSlideIndex = 0;
  visibleSlides: any[] = [];
  ngOnInit(): void {
    this.defaultSlide();
    this.startSlider();
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.currentSlideIndex =
        (this.currentSlideIndex + 1) % this.slides.length;
      const currentSlider = this.slides[this.currentSlideIndex];
      this.visibleSlides = [currentSlider];
    }, 10000);
  }

  defaultSlide() {
    const firstAd = this.slides[0];
    this.visibleSlides = [firstAd];
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }
}
