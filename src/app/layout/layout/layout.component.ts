import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  time: number = 3000;
  isSplashPage: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isSplashPage = false;
    }, this.time);
  }
}
