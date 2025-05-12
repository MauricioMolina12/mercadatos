import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.scss',
})
export class CardImageComponent {
  @Input() item: any = {};
  @Output() clicCard = new EventEmitter<void>();

  handlerClic(): void {
    this.clicCard.emit();
  }
}
