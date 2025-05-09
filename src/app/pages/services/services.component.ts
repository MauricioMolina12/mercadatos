import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { SeoService } from '../../shared/services/seo.service';
import { SeoData } from '../../shared/models/seo';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../shared/services/services.service';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit {
  isDark: boolean = false;
  slug: any;
  service: { name: string; description: string; url: string; slug: string } = {
    name: '',
    description: '',
    url: '',
    slug: '',
  };

  constructor(
    private themeService: ThemeService,
    private seoService: SeoService,
    private router: ActivatedRoute,
    private servicesService: ServicesService
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      this.slug = param.get('id');
      const service = this.servicesService.getServiceBySlug(this.slug);
      if (service) {
        this.service = service;
      }
    });
    const dataSeo: SeoData = {
      title: 'SERVICIOS - MERCADATOS SAS',
      description:
        'En MERCADATOS S.A.S BIC brindamos soluciones especializadas que integran conocimiento, tecnología y estrategia para apoyar la gestión de entidades públicas, privadas y del sector solidario. Nuestros servicios están diseñados para generar impacto real, facilitando la toma de decisiones y el cumplimiento de objetivos institucionales.',
    };
    this.seoService.updateSeoTags(dataSeo);
  }
}
