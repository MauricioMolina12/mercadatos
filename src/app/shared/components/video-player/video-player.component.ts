import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoSrc: string = '';
  @Input() poster: string = '';

  @ViewChild('videoPlayer', { static: false })
  videoPlayer!: ElementRef<HTMLVideoElement>;
  isPlaying: boolean = false;
  isViewButtons: boolean = false;

  ngOnInit(): void {
    this.isViewButtons = true;
    setTimeout(() => {
      this.isViewButtons = false;
    }, 8000);
  }

  togglePlay(e: Event) {
    e.stopPropagation();
    const video = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }
  private hideButtonsTimeout: any;

  moveTime(event: Event, type: 'pass' | 'back'): void {
    event.stopPropagation();

    const segundos = type === 'pass' ? 10 : -10;
    this.moverVideo(segundos);
  }

  moverVideo(segundos: number): void {
    const video = this.videoPlayer?.nativeElement;

    if (!video || isNaN(video.duration)) return;

    this.isViewButtons = true;

    if (this.hideButtonsTimeout) {
      clearTimeout(this.hideButtonsTimeout);
    }

    this.hideButtonsTimeout = setTimeout(() => {
      this.isViewButtons = false;
    }, 3000);

    const nuevoTiempo = Math.min(
      Math.max(video.currentTime + segundos, 0),
      video.duration
    );
    video.currentTime = nuevoTiempo;
  }
}
