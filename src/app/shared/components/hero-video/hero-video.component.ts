import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-hero-video',
  standalone: true,
  templateUrl: './hero-video.component.html',
  styleUrl: './hero-video.component.scss',
})
export class HeroVideoComponent implements OnInit, OnChanges {
  @Input() info: any;
  url_video: string = '';

  ngOnInit(): void {}

  @ViewChild('videoPlayer', { static: false })
  videoPlayer!: ElementRef<HTMLVideoElement>;

  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroDescription') heroDescription!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['info'] && changes['info'].currentValue) {
      const newUrl = changes['info'].currentValue.url;
      if (newUrl && newUrl !== this.url_video) {
        this.url_video = newUrl;

        const title = this.heroTitle?.nativeElement;
        const description = this.heroDescription?.nativeElement
        const videoEl = this.videoPlayer?.nativeElement;
        if (videoEl) {
          videoEl.load();
          videoEl.play();
        }

        if (title && description) {
          title.classList.remove('animation');
          void title.offsetWidth;
          title.classList.add('animation');

          description.classList.remove('animation');
          void description.offsetWidth;
          description.classList.add('animation');
        }
      }
    }
  }
}
