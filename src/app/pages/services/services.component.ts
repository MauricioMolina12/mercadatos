import { Component, OnInit } from '@angular/core';
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
export class ServicesComponent implements OnInit {
  isDark: boolean = false;
  slug: string | null = null;
  content: SafeHtml | null = null;
  error = false;

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

  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      this.slug = param.get('id') || '';
      this.loadMarkdown(this.slug);
      const service = this.servicesService.getServiceBySlug(this.slug || '');
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

  async loadMarkdown(slug: string) {
    try {
      const mdText = await firstValueFrom(
        this.http.get(`assets/services-content/${slug}.md`, {
          responseType: 'text',
        })
      );

      const html = await marked.parse(mdText);
      this.content = this.sanitizer.bypassSecurityTrustHtml(html);
      console.log(this.content);
    } catch (error) {
      this.error = true;
    }
  }
}
