import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkDarkMode();
    }
  }

  checkDarkMode() {
    if (isPlatformBrowser(this.platformId)) {
      const isDark = localStorage.getItem('theme') === 'dark';
      this.darkModeSubject.next(isDark); 
      if (isDark) {
        this.document.body.classList.add('dark');
      } else {
        this.document.body.classList.remove('dark');
      }
    }
  }

  setTheme(isDark: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      if (isDark) {
        this.document.body.classList.add('dark');
      } else {
        this.document.body.classList.remove('dark');
      }
      localStorage.setItem('theme', isDark ? 'dark' : 'white');
      this.darkModeSubject.next(isDark);
    }
  }
}
