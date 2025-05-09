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

  ngOnInit(): void { 
    console.log(this.url_video);
  }

  @ViewChild('videoPlayer', { static: false })
  videoPlayer!: ElementRef<HTMLVideoElement>;

  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroDescription') heroDescription!: ElementRef;

  ngOnChanges(changes: SimpleChanges): void {
    const infoChange = changes['info'];

    if (infoChange?.currentValue) {
      const newUrl = infoChange.currentValue.url;

      if (newUrl && newUrl !== this.url_video) {
        this.url_video = newUrl;

        console.log(this.url_video);
        this.reloadVideo();
        this.restartAnimation(this.heroTitle);
        this.restartAnimation(this.heroDescription);
      }
    }
  }

  private reloadVideo(): void {
    const videoEl = this.videoPlayer?.nativeElement;
    if (videoEl) {
      videoEl.load();
      videoEl.play();
    }
  }

  private restartAnimation(elementRef: ElementRef): void {
    const el = elementRef?.nativeElement;
    if (el) {
      el.classList.remove('animation');
      void el.offsetWidth;
      el.classList.add('animation');
    }
  }
}
