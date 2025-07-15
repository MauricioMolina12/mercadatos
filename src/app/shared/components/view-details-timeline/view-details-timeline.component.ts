import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { timeline } from '../../models/timeline';

@Component({
  selector: 'app-view-details-timeline',
  standalone: true,
  templateUrl: './view-details-timeline.component.html',
  styleUrl: './view-details-timeline.component.scss',
})
export class ViewDetailsTimelineComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() timeline: timeline = {
    name: '',
    image: '',
    description: '',
    descriptionInternal: '',
  };
  @Output() closeClick = new EventEmitter<boolean>();
  @ViewChild('content') contentLine!: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.setOverflow('hidden');
  }
  
  ngAfterViewInit(): void {
    this.setBgImage();
  }

  private setBgImage() {
    if (this.contentLine) {      
      this.renderer.setStyle(
        this.contentLine.nativeElement,
        'background-image',
        `url(${this.timeline.image})`
      );
      this.renderer.setStyle(
        this.contentLine.nativeElement,
        'background-size',
        'cover'
      );
      this.renderer.setStyle(
        this.contentLine.nativeElement,
        'background-position',
        'center'
      );
    }
  }

  ngOnDestroy(): void {
    this.setOverflow('auto');
  }

  setOverflow(state: 'auto' | 'hidden') {
    if (state === 'hidden') {
      this.document.body.classList.add('hidden');
    } else {
      this.document.body.classList.remove('hidden');
    }
  }
}
