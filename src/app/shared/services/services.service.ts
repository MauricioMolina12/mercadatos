import { Injectable } from '@angular/core';
import { ServiceData, services } from '../data/services.data';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor() {}

  getServiceBySlug(slug: string): ServiceData | undefined {
    return services.find((service) => service.slug === slug);
  }
}
