import { Component, ElementRef } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';
import { ThemeService } from '../../shared/services/theme.service';
import { SeoData } from '../../shared/models/seo';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isTextCopied: boolean = false;
  isDark: boolean = false;
  textCopied: string = '';
  emailsFlattened: String[] = [];

  emailsForArea: { value: string; area: string; icon: string }[] = [
    {
      value: 'eruiza@mercadatos.com.co',
      area: 'Gerencia General',
      icon: 'business_center', // icono de gerencia
    },
    {
      value: 'jruiza@mercadatos.com.co',
      area: 'Gerencia Administrativa y Financiera:',
      icon: 'account_balance', // finanzas
    },
    {
      value: 'eruizv@mercadatos.com.co',
      area: 'Oficina Jurídica & Oficina Estratégica',
      icon: 'gavel', // asuntos legales
    },
    {
      value: 'rsantiagou@mercadatos.com.co',
      area: 'Sistema Integrado de Gestión',
      icon: 'assignment_turned_in', // cumplimiento o gestión
    },
    {
      value: 'marizaf@mercadatos.com.co',
      area: 'Oficina de Proyectos',
      icon: 'event_note', // planificación de proyectos
    },
    {
      value: 'sruiza@mercadatos.com.co',
      area: 'Oficina Tecnológica',
      icon: 'memory', // tecnología
    },
    {
      value: 'lmejiad@mercadatos.com.co',
      area: 'Desarrollo Organizacional',
      icon: 'people', // gestión de personas
    },
    {
      value: 'mescolarq@mercadatos.com.co',
      area: 'Asistente Administrativo',
      icon: 'person', // asistencia o persona
    },
  ];

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

  defaultEmail = this.emailsForArea[0].value;
  originalEmailsForArea = [...this.emailsForArea];
  constructor(
    private el: ElementRef,
    private seoService: SeoService,
    private themeService: ThemeService
  ) {
    this.emailsForArea = this.emailsForArea.filter(
      (email) => email.value === this.defaultEmail
    );
    this.emailsFlattened = this.originalEmailsForArea.map(
      (email) => email.area
    );

    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }


  ngOnInit(): void {
    const dataSeo: SeoData = {
      title: 'CONTACTO - MERCADATOS SAS',
      description: 'En MERCADATOS S.A.S BIC, estamos comprometidos en brindarte soluciones integrales en gestión documental, investigación de mercados, asesoría jurídica y servicios tecnológicos. Nuestro equipo multidisciplinario está listo para atender tus necesidades con eficiencia y profesionalismo'
    };
    this.seoService.updateSeoTags(dataSeo);
  }

  copyToClipboard(text: string) {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          console.log('Texto copiado al portapapeles');
        })
        .catch((err) => {
          console.error('Error al copiar al portapapeles', err);
        });
    } else {
      const textArea = this.el.nativeElement.querySelector(
        'contact-information__card-content-description'
      );
      textArea.value = text;
      textArea.select();
      document.execCommand('copy');
    }
    this.isTextCopied = true;
    this.textCopied = text;
    setTimeout(() => {
      this.isTextCopied = false;
    }, 3000);
  }

  filterByEmail(e: Event) {
    const value = (e.target as HTMLSelectElement)?.value;
    this.emailsForArea = this.originalEmailsForArea.filter(
      (email) => email.area === value
    );
  }
}
