import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-video',
  standalone: true,
  templateUrl: './hero-video.component.html',
  styleUrl: './hero-video.component.scss',
})
export class HeroVideoComponent implements OnInit{
  @Input() info: any;

  ngOnInit(): void {
    console.log(this.info);
  }
}
