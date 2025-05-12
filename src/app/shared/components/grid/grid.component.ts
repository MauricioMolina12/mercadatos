import { NgFor } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CardImageComponent } from "../card-image/card-image.component";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [NgFor, CardImageComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  @Input() items: any[] = [];

  constructor(private el: ElementRef){}

  ngOnInit(): void {
  }
}
