import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { SeoService } from '../../shared/services/seo.service';
import { SeoData } from '../../shared/models/seo';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../shared/services/services.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { marked } from 'marked';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements OnInit, OnDestroy {
  isDark: boolean = false;
  slug: string | null = null;
  content: SafeHtml | null = null;
  error = false;
  descriptionMeeting: string = '';

  service: {
    name: string;
    description: string;
    url: string;
    slug: string;
    content: { title: string; content: string }[];
  } = {
    name: '',
    description: '',
    url: '',
    slug: '',
    content: [],
  };
  constructor(
    private themeService: ThemeService,
    private seoService: SeoService,
    private router: ActivatedRoute,
    private servicesService: ServicesService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  async ngOnInit() {
    this.router.paramMap.subscribe((param) => {
      this.slug = param.get('id') || '';
      this.loadMarkdown(this.slug);
      const service = this.servicesService.getServiceBySlug(this.slug || '');
      if (service) {
        this.service = service;
        this.descriptionMeeting = this.getMeetingDescription(this.slug);
      }
    });
    const dataSeo: SeoData = {
      title: 'SERVICIOS - MERCADATOS SAS',
      description:
        'En MERCADATOS S.A.S BIC brindamos soluciones especializadas que integran conocimiento, tecnología y estrategia para apoyar la gestión de entidades públicas, privadas y del sector solidario. Nuestros servicios están diseñados para generar impacto real, facilitando la toma de decisiones y el cumplimiento de objetivos institucionales.',
    };
    this.seoService.updateSeoTags(dataSeo);
  }

  ngOnDestroy(): void {
    this.slug = '';
    this.service = {
      name: '',
      description: '',
      url: '',
      slug: '',
      content: [],
    };
  }

  async loadMarkdown(slug: string) {
    try {
      const mdText = await firstValueFrom(
        this.http.get(`assets/services-content/${slug}.md`, {
          responseType: 'text',
        })
      );

      const html = await marked.parse(mdText);
      this.content = this.sanitizer.bypassSecurityTrustHtml(html);
    } catch (error) {
      this.error = true;
    }
  }

  getMeetingDescription(slug: string): string {
    let title;
    switch (slug) {
      case 'gestion-documental':
        title =
          '¿Necesitas organizar tu documentación? Conversemos y empecemos de inmediato.';
        break;
      case 'impresos-graficos':
        title =
          '¿Buscas un diseño que impacte? Conversemos y hagámoslo realidad.';
        break;
      case 'representacion-legal-asesorias-y-consultorias-juridicas':
        title =
          '¿Necesitas respaldo legal confiable? Conversemos y actuemos con firmeza.';
        break;
      case 'investigacion-y-estudios-de-mercado':
        title = '¿Necesitas entender mejor tu mercado? Conversemos y tomemos decisiones con certeza.';
        break;
      default:
        title = 'Title default';
    }

    return title;
  }
}
