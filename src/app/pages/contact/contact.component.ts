import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  cards = [
    {
      icon: 'apartment',
      title: 'NIT',
      content: '890.116.175-9',
      hexColor: '#00BCD4',
    },
    {
      icon: 'place',
      title: 'DIRECCIÓN',
      content: 'Cra 81 #84-96, Barranquilla-Colombia.',
      hexColor: '#4CAF50',
    },
    {
      icon: 'call',
      title: 'TELÉFONO',
      content: '035 – 304 40 40.',
      hexColor: '#FF9800',
    },
    {
      icon: 'mail',
      title: 'CORREO ELECTRÓNICO EN CC',
      content: 'info@mercadatos.com.co',
      hexColor: '#673AB7',
    },
  ];
}
