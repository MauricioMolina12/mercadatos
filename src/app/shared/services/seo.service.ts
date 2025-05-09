import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoData } from '../models/seo';


@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private titleService: Title, private metaService: Meta) {}

  private setTitle(title: string): void {
    this.titleService.setTitle(title || 'Mercadatos');
  }

  updateSeoTags(data: SeoData): void {
    this.setTitle(data.title);
    this.metaService.updateTag({ name: 'description', content: data.description });
  }
}
