import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  HostListener,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  menuActive = false;
  isDarkTheme!: boolean;

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
      ariaLabel: 'Ir a la sección sobre nosotros',
    },
    {
      label: 'Servicios',
      href: '#services',
      ariaLabel: 'Ir a la sección de servicios',
      isDropdown: true,
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
      ariaLabel: 'Ir a la sección de clientes',
    },
    {
      label: 'Contacto',
      href: '#contact',
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
    @Inject(PLATFORM_ID) private platformId: Object
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
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.setTheme(this.isDarkTheme);

    setTimeout(() => {
      this.menuActive = false;
    }, 200);
  }

  activeDropdown: string | null = null;
  clicItemNav(label: string) {
    const isDropdown = label === 'Servicios' || label === 'Actualidad';

    if (isDropdown) {
      const isSameDropdown = this.activeDropdown === label;

      // Alternar el dropdown activo
      this.activeDropdown = isSameDropdown ? null : label;

      // Manejo del layer visual
      if (!isSameDropdown) {
        document.body.classList.add('layer');
      } else {
        document.body.classList.remove('layer');
      }

      // Contenido dinámico
      this.contentDropdown =
        label === 'Servicios'
          ? [
              {
                label: 'SERVICIOS EN GESTIÓN DOCUMENTAL',
                href: '#service1',
                ariaLabel: 'Ir a la sección de servicios en gestión documental',
              },
              {
                label: 'INVESTIGACIÓN Y ESTUDIOS DE MERCADO',
                href: '#service2',
                ariaLabel:
                  'Ir a la sección de servicio de investigación y estudios de mercado',
              },
              {
                label: 'IMPRESOS GRÁFICOS',
                href: '#service2',
                ariaLabel: 'Ir a la sección de servicio de impresos gráficos',
              },
              {
                label:
                  'REPRESENTACIÓN LEGAL, ASESORÍAS Y CONSULTORÍAS JURÍDICAS',
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
    }

    // Si no es un dropdown, cerrar el menú normalmente
    setTimeout(() => {
      this.menuActive = false;
    }, 200);
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
    this.document.body.style.overflowY = this.menuActive === true ? 'hidden' : 'auto';
  }
}
