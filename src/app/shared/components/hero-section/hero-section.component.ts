import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: false,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  banners: { title: string; description: string; image: string }[] = [
    {
      title: 'Bienvenido a Mercadatos',
      description:
        '¿Sabes qué es la gestión documental? Descubre todo sobre cómo esta práctica puede impulsar a tu empresa. ¡Haz clic en el botón para comenzar!',
      image: 'assets/team-pictures/_DSC0623_result.webp',
    },
    {
      title: 'Consultoría y Asesoría Archivística',
      description:
        'Ofrecemos consultoría y asesoría archivística para mejorar la gestión documental de tu organización, garantizando el manejo, organización y conservación adecuada de archivos, según la normativa vigente.',
      image: 'assets/team-pictures/consultoria-asesoria.jpg',
    },
    {
      title: 'Organización y Tratamiento Archivístico',
      description:
        'Ofrecemos servicios especializados en la organización y tratamiento archivístico de documentos, con el objetivo de garantizar el acceso, la conservación y la correcta disposición de la información en tu entidad.',
      image: 'assets/gestion-documental.jpg',
    },
  ];

  currentBanner: number = 0;
  intervalId: any;
  ngOnInit(): void {
    if (!isPlatformServer(this.platformId)) {
      this.startBannerPresentation();
    }
  }

  ngOnDestroy(): void {
    this.intervalId = null;
  }

  startBannerPresentation() {
    this.intervalId = setInterval(() => {
      this.currentBanner = (this.currentBanner + 1) % this.banners.length;
      this.triggerAnimation(this.currentBanner);
    }, 5000);
  }

  animateIndex: number | null = 0;

  triggerAnimation(index: number) {
    this.animateIndex = null;
    setTimeout(() => {
      this.animateIndex = index;
    }, 0);
  }

  isPaused: boolean = false;
  toogleBanner() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      clearInterval(this.intervalId);
    } else {
      this.startBannerPresentation();
    }
  }

  callAction() {
    if (isPlatformBrowser(this.platformId)) {
      this.document.defaultView?.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  }
  
}
