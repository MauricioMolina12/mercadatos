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
  progress = 0;

  @ViewChild('videoPlayer', { static: false })
  videoPlayer!: ElementRef<HTMLVideoElement>;
  isPlaying: boolean = false;
  isMuted: boolean = false;
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

  toggleSound(e: Event) {
    e.stopPropagation();
    const video = this.videoPlayer.nativeElement;
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }

  private hideButtonsTimeout: any;

  moveTime(event: Event, type: 'pass' | 'back'): void {
    event.stopPropagation();

    const segundos = type === 'pass' ? 10 : -10;
    this.moveVideo(segundos);
  }

  moveVideo(segundos: number): void {
    const video = this.videoPlayer?.nativeElement;

    if (!video || isNaN(video.duration)) return;

    this.isViewButtons = true;

    if (this.hideButtonsTimeout) {
      clearTimeout(this.hideButtonsTimeout);
    }

    this.hideButtonsTimeout = setTimeout(() => {
      this.isViewButtons = false;
    }, 3000);

    const newTime = Math.min(
      Math.max(video.currentTime + segundos, 0),
      video.duration
    );
    video.currentTime = newTime;
  }

  // updateProgress() {
  //   const video = this.videoPlayer.nativeElement;
  //   this.progress = (video.currentTime / video.duration) * 100;
  // }

  onProgressBarClick(event: MouseEvent): void {
    const progressBar = event.currentTarget as HTMLElement;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickRatio = clickX / rect.width;

    const video = this.videoPlayer.nativeElement;
    video.currentTime = clickRatio * video.duration;
  }

  private isDragging = false;

  onProgressMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.updateProgressFromMouseEvent(event);

    document.addEventListener('mousemove', this.onDocumentMouseMove);
    document.addEventListener('mouseup', this.onDocumentMouseUp);
  }

  onDocumentMouseMove = (event: MouseEvent) => {
    if (!this.isDragging) return;
    this.updateProgressFromMouseEvent(event);
  };

  onDocumentMouseUp = () => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onDocumentMouseMove);
    document.removeEventListener('mouseup', this.onDocumentMouseUp);
  };

  private updateProgressFromMouseEvent(event: MouseEvent) {
    const progressBar = document.querySelector(
      '.video-progress-bar'
    ) as HTMLElement;
    if (!progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickRatio = Math.min(Math.max(clickX / rect.width, 0), 1);

    const video = this.videoPlayer.nativeElement;
    video.currentTime = clickRatio * video.duration;
    this.progress = clickRatio * 100;
  }

  updateProgress() {
    if (this.isDragging) return; 
    const video = this.videoPlayer.nativeElement;
    this.progress = (video.currentTime / video.duration) * 100;
  }
}
