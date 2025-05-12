import { NgFor, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-carousel',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './pdf-carousel.component.html',
  styleUrls: ['./pdf-carousel.component.scss'],
})
export class PdfCarouselComponent {
  @Input() files: { name: string; year: number; path: string }[] = [];
  currentIndex: number = 0;

  nextCard() {
    if (this.currentIndex < this.files.length - 1) {
      this.currentIndex++;
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
