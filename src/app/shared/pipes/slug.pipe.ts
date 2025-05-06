import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'slug',
})
export class SlugPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .trim();
  }
}
