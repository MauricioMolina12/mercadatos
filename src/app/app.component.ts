import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ThemeService } from './shared/services/theme.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { UtilsService } from './shared/services/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'mercadatos';

  constructor(
    private themeService: ThemeService,
    public utilsService: UtilsService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit(): void {
    this.themeService.checkDarkMode();
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = 'hidden';
      window.addEventListener('load', () => {
        const loader = this.document.getElementById('global-loader');
        if (loader) {
          loader.style.transition = 'opacity 300ms ease';
          loader.style.opacity = '0';

          setTimeout(() => {
            loader.remove();
            this.document.body.style.overflow = 'auto';
          }, 300);
        } else {
          this.document.body.style.overflow = 'auto';
        }
      });
    }
  }
}
