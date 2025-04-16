import { Component, OnInit } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'mercadatos';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.checkDarkMode();
  }
}
