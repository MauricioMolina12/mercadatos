import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';
import { SeoService } from '../../shared/services/seo.service';
import { SeoData } from '../../shared/models/seo';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  isDark: boolean = false;
  constructor(
    public themeService: ThemeService,
    private seoService: SeoService
  ) {
    this.themeService.darkMode$.subscribe((theme) => {
      this.isDark = theme;
    });
  }

  ngOnInit(): void {
    const dataSeo: SeoData = {
      title: 'NOTICIAS - MERCADATOS SAS',
      description:
        'En MERCADATOS S.A.S BIC compartimos noticias y novedades propias que reflejan nuestro compromiso con la innovación, la tecnología y la estrategia aplicada a la gestión de entidades públicas, privadas y del sector solidario. Mantente al día con nuestros avances, proyectos y análisis exclusivos diseñados para apoyar la toma de decisiones y el cumplimiento de objetivos institucionales.',
    };
    this.seoService.updateSeoTags(dataSeo);
  }

  news: { image: string; title: string; description: string }[] = [
    // {
    //   image: 'assets/clean-browser-mockup.png',
    //   title: '¡Estrenamos nueva página web!',
    //   description: 'Nos complace anunciar el lanzamiento de nuestro nuevo sitio web. Hemos renovado nuestra plataforma para ofrecerte una experiencia más intuitiva, rápida y accesible. Con un diseño moderno, navegación optimizada y nuevas funcionalidades, podrás encontrar la información que necesitas de forma más ágil. ¡Te invitamos a explorarla y descubrir todas las novedades que tenemos para ti!'
    // },

    {
      image: 'assets/team-soccer.jpeg',
      title: 'Mercadatos S.A.S BIC le apuesta al deporte',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
    {
      image: 'assets/news/ceremonia-graduacion.jpg',
      title:
        'Ceremonia de Graduación como Auditores en Sistema de Gestión de Registros del Icontec',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
    {
      image: 'assets/news/auditoria-externa.jpeg',
      title:
        'Auditoría Externa de Otorgamiento del Icontec en la NTC ISO 9001:2015',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
    {
      image: 'assets/news/auditoria-interna.jpeg',
      title: 'Auditoría Interna 2022',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
    {
      image: 'assets/news/expo-bic.jpg',
      title:
        'Expo BIC: Recibimos Reconocimiento BIC y participamos como Expositores',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
    {
      image: 'assets/news/convenio-marco-cooperacion.jpeg',
      title:
        'Firmamos Convenio Marco de Cooperación Interinstitucional con la Fundación Sanar Costa Atlántica.',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
    {
      image: 'assets/news/webinar.jpeg',
      title:
        'Webinar: Digitalización como medio de optimización y eficiencia en las organizaciones.',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
    {
      image: 'assets/news/innovacion.jpeg',
      title:
        'Nuestra experiencia en el programa de Innovación y Crecimiento para mujeres y jóvenes empresarios',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
    {
      image: 'assets/news/ciclo-caribe.jpg',
      title:
        'Experiencias y visita del Director de Fábricas de Productividad Ciclo Caribe',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
    {
      image: 'assets/news/gimi.jpg',
      title: 'Se otorga Certificación Internacional GIMI a Mercadatos',
      description:
        'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).',
    },
  ];
}
