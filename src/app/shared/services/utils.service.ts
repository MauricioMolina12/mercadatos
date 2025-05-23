import { ElementRef, Injectable, QueryList } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private title: Title, private meta: Meta) {}

  /**
   * Function to observe the intersection of elements in the viewport
   * @param array - The first parameter is a querylist type array that brings elementRef
   * @param threshold - The second parameter is the threshold to detect at what percentage of visibility the element should be seen.
   * @returns {IntersectionObserver<any>} - Returns an IntersectionObserver
   */
  parallaxEffect(
    array: QueryList<ElementRef>,
    threshold: number
  ): IntersectionObserver | null {
    if (typeof IntersectionObserver === 'undefined') {
      return null;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: threshold }
    );

    array.forEach((object: ElementRef) => {
      observer.observe(object.nativeElement as HTMLElement);
    });

    return observer; // Returns the observer so that it can be disconnected if necessary
  }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

}
