import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { SeoService } from '../../shared/services/seo.service';
import { SeoData } from '../../shared/models/seo';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isDark: boolean = false;

  constructor(
    private themeService: ThemeService,
    private seoService: SeoService
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  ngOnInit(): void {
    const dataSeo: SeoData = {
      title: 'MERCADATOS SAS',
      description:
        'Servicios en Gestión Documental ofrecemos soluciones especializadas para la gestión eficiente de tu información mejorando los procesos, optimizando procedimientos personalizados y ajustados a tus necesidades misionales y legales.',
    };
    this.seoService.updateSeoTags(dataSeo);
  }
}
