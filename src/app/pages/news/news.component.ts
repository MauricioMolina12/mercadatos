import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: false,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

  news: {image: string; title: string; description: string}[] = [
    {
      image: 'assets/clean-browser-mockup.png',
      title: '¡Estrenamos nueva página web!',
      description: 'Nos complace anunciar el lanzamiento de nuestro nuevo sitio web. Hemos renovado nuestra plataforma para ofrecerte una experiencia más intuitiva, rápida y accesible. Con un diseño moderno, navegación optimizada y nuevas funcionalidades, podrás encontrar la información que necesitas de forma más ágil. ¡Te invitamos a explorarla y descubrir todas las novedades que tenemos para ti!'
    },
     {
      image: 'assets/team-soccer.jpeg',
      title: 'Mercadatos S.A.S BIC le apuesta al deporte',
      description: 'Mercadatos S.A.S. BIC, de la mano de la Gerencia, le apuesta al deporte como como una herramienta exitosa de cambio social y urbano ya que facilita la integración, la cohesión social, la consolidación de relaciones interpersonales, la formación de los jóvenes y la generación de empleo (Metrópolis, 2015).'
    }
  ]
}
