import { Component, ElementRef } from '@angular/core';
import { SeoService } from '../../shared/services/seo.service';
import { ThemeService } from '../../shared/services/theme.service';
import { SeoData } from '../../shared/models/seo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

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
  contactForm!: FormGroup;

  emailsForArea: { value: string; area: string; icon: string }[] = [
    {
      value: 'eruiza@mercadatos.com.co',
      area: 'Gerencia General',
      icon: 'business_center',
    },
    {
      value: 'jruiza@mercadatos.com.co',
      area: 'Gerencia Administrativa y Financiera:',
      icon: 'account_balance',
    },
    {
      value: 'eruizv@mercadatos.com.co',
      area: 'Oficina Jurídica & Oficina Estratégica',
      icon: 'gavel',
    },
    {
      value: 'rsantiagou@mercadatos.com.co',
      area: 'Sistema Integrado de Gestión',
      icon: 'assignment_turned_in',
    },
    {
      value: 'marizaf@mercadatos.com.co',
      area: 'Oficina de Proyectos',
      icon: 'event_note',
    },
    {
      value: 'sruiza@mercadatos.com.co',
      area: 'Oficina Tecnológica',
      icon: 'memory',
    },
    {
      value: 'lmejiad@mercadatos.com.co',
      area: 'Desarrollo Organizacional',
      icon: 'people',
    },
    {
      value: 'mescolarq@mercadatos.com.co',
      area: 'Asistente Administrativo',
      icon: 'person',
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

  networks: { name: string; link: string; image: string }[] = [
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/mercadatos_/',
      image: 'assets/instagram-logo.svg',
    },
    {
      name: 'Whatsapp',
      link: 'https://api.whatsapp.com/send?phone=573022959763&text=¡Hola!%20Estoy%20visitando%20su%20sitio%20web%20y%20me%20gustaría%20obtener%20más%20información.%20😊',
      image: 'assets/whatsapp.webp',
    },
    {
      name: 'Linkedin',
      link: 'https://co.linkedin.com/company/mercadatos-s-a',
      image: 'assets/linkedin.png',
    },
  ];

  defaultEmail = this.emailsForArea[0].value;
  originalEmailsForArea = [...this.emailsForArea];
  constructor(
    private el: ElementRef,
    private seoService: SeoService,
    private themeService: ThemeService,
    private fb: FormBuilder
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

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const dataSeo: SeoData = {
      title: 'CONTACTO - MERCADATOS SAS',
      description:
        'En MERCADATOS S.A.S BIC, estamos comprometidos en brindarte soluciones integrales en gestión documental, investigación de mercados, asesoría jurídica y servicios tecnológicos. Nuestro equipo multidisciplinario está listo para atender tus necesidades con eficiencia y profesionalismo',
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
    console.log(this.emailsForArea);
  }

  sendText: string = '';
  isLoading: boolean = false;
  isEmailSend: boolean = false;
  isSuccessMessage: boolean = false;
  submitMessage() {
    if (this.contactForm.valid) {
      this.isLoading = true; 
      const { name, email, message } = this.contactForm.value;

      const templateParams = {
        name,
        email,
        message,
        time: new Date().toLocaleString(),
      };

      emailjs
        .send(
          'service_fjjzuwh',
          'template_kkwtt0k',
          templateParams,
          'VPj63xUtAafjdJ2s5'
        )
        .then((res) => {
          this.isSuccessMessage = true;
          this.sendText = '¡Tu mensaje fue enviado correctamente!';
          this.contactForm.reset();
        })
        .catch((err) => {
          this.isSuccessMessage = false;
          this.sendText =
            'Hubo un problema al enviar el mensaje. Intenta más tarde.';
        })
        .finally(() => {
          this.isLoading = false; 
          this.isEmailSend = true;
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
