import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor() {}

  links: { label: string; path: string }[] = [
    {
      label: 'Inicio',
      path: '/',
    },
    {
      label: 'Nosotros',
      path: '/about',
    },
    {
      label: 'Clientes',
      path: '/customers',
    },
    {
      label: 'Noticias',
      path: '/news',
    },
    {
      label: 'Contacto',
      path: '/contact',
    },
  ];
}
