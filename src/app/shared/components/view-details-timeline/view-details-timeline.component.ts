import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  EventEmitter,
  Inject,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { timeline } from '../../models/timeline';

@Component({
  selector: 'app-view-details-timeline',
  standalone: true,
  templateUrl: './view-details-timeline.component.html',
  styleUrl: './view-details-timeline.component.scss',
})
export class ViewDetailsTimelineComponent implements OnInit, OnDestroy {
  @Input() timeline: timeline = {
    name: '',
    image: '',
    description: '',
    descriptionInternal: ''
  };
  @Output() closeClick = new EventEmitter<boolean>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.setOverflow('hidden');
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
