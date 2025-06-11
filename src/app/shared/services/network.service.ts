import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor() {
    this.initNetworkListener();
  }

  network = signal(navigator.onLine);

  isOnline() {
    return this.network;
  }

  initNetworkListener() {
    this.network.set(navigator.onLine);

    window.addEventListener('online', () => {
      this.network.set(true);
    });

    window.addEventListener('offline', () => {
      this.network.set(false);
    });
  }
}
