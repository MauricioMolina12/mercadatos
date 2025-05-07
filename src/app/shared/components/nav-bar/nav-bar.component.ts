import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  HostListener,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

interface NavItem {
  label: string;
  href: string;
  ariaLabel: string;
  routerLink?: string | string[];
  routerLinkActive?: string;
  extraClasses?: string;
  ngClass?: { [key: string]: boolean };
  isDropdown?: boolean;
}

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  menuActive = false;
  isDarkTheme!: boolean;
  @ViewChild('navList') navListRef!: ElementRef;

  navItems: NavItem[] = [
    {
      label: 'Inicio',
      href: '#home',
      ariaLabel: 'Ir a la página principal',
      routerLink: [''],
      routerLinkActive: 'active',
    },
    {
      label: 'Nosotros',
      href: '#about',
      routerLink: ['/about'],
      routerLinkActive: 'active',
      ariaLabel: 'Ir a la sección sobre nosotros',
    },
    {
      label: 'Servicios',
      href: '#services',
      isDropdown: true,
      // routerLink: ['/services'],
      // routerLinkActive: 'active',
      ariaLabel: 'Ir a la sección de servicios',
    },
    {
      label: 'Actualidad',
      href: '#contact',
      ariaLabel: 'Ir a la sección de actualidad',
      isDropdown: true,
    },
    {
      label: 'Clientes',
      href: '#contact',
      routerLink: ['/customers'],
      routerLinkActive: 'active',
      ariaLabel: 'Ir a la sección de clientes',
    },
    {
      label: 'Contacto',
      href: '#contact',
      routerLink: ['/contact'],
      ariaLabel: 'Ir a la sección de contacto',
    },
    {
      label: 'A la mano',
      href: '#contact',
      ariaLabel: 'Ir a la sección de a la mano',
      ngClass: { 'last-item-active': true },
    },
  ];

  contentDropdown: any[] = [];

  constructor(
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDarkTheme = isDark;
    });

    if (isPlatformBrowser(this.platformId)) {
      const isDark = localStorage.getItem('theme') === 'dark';
      this.isDarkTheme = isDark;
      this.themeService.setTheme(isDark);
    }

    const url = this.router.url;
    if (url.includes('/services')) {
      this.itemActive = '';
    }
  }

  convertToSlug(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .trim();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setTheme(this.isDarkTheme);

    setTimeout(() => {
      this.menuActive = false;
    }, 200);
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.navListRef?.nativeElement.contains(event.target)) {
      this.activeDropdown = null;
    }
  }

  activeDropdown: string | null = null;
  clicItemNav(label: string) {
    const isDropdown = label === 'Servicios' || label === 'Actualidad';

    if (isDropdown) {
      const isSameDropdown = this.activeDropdown === label;
      this.activeDropdown = isSameDropdown ? null : label;
      this.contentDropdown =
        label === 'Servicios'
          ? [
              {
                label: 'SERVICIOS EN GESTIÓN DOCUMENTAL',
                slug: 'gestion-documental',
                href: '#service1',
                ariaLabel: 'Ir a la sección de servicios en gestión documental',
              },
              {
                label: 'INVESTIGACIÓN Y ESTUDIOS DE MERCADO',
                slug: 'investigacion-y-estudios-de-mercado',
                href: '#service2',
                ariaLabel:
                  'Ir a la sección de servicio de investigación y estudios de mercado',
              },
              {
                label: 'IMPRESOS GRÁFICOS',
                slug: 'impresos-graficos',
                href: '#service2',
                ariaLabel: 'Ir a la sección de servicio de impresos gráficos',
              },
              {
                label:
                  'REPRESENTACIÓN LEGAL, ASESORÍAS Y CONSULTORÍAS JURÍDICAS',
                slug: 'representacion-legal-asesorias-y-consultorias-juridicas',
                href: '#service2',
                ariaLabel:
                  'Ir a la sección de servicio de representación legal, asesorías y consultorías jurídicas',
              },
            ]
          : [
              {
                label: 'NOTICIAS',
                href: '#actuality1',
                ariaLabel: 'Ir a la sección de actualidad 1',
              },
              {
                label: 'OPINIÓN & RSE',
                href: '#actuality2',
                ariaLabel: 'Ir a la sección de actualidad 2',
              },
            ];

      return;
    } else {
      this.menuActive = false;
    }
  }

  itemActive: string = '';
  redirectItem(label: string, item: 'services' | 'news') {
    switch (item) {
      case 'services':
        this.router.navigate(['/services', label]);
        this.itemActive = label;
        break;
    }
    this.menuActive = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollTop = (event.target as Document).documentElement.scrollTop;
    const navBar = document.querySelector('nav') as HTMLElement;

    if (scrollTop > 0) {
      navBar.classList.add('scrolled');
    } else {
      navBar.classList.remove('scrolled');
    }
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
    // this.document.body.style.overflowY = this.menuActive === true ? 'hidden' : 'auto';
  }
}
