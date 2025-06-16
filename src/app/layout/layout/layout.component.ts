import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { NetworkService } from '../../shared/services/network.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: false,
})
export class LayoutComponent implements OnInit {
  time = 3000;
  isSplashPage = true;
  showButton = false;
  viewAnniversary: boolean = true;

  network = signal(true);
  showNetworkMessage = signal(false);
  statusNetwork = computed(() =>
    this.network()
      ? 'Vuelves a tener conexión'
      : 'No tienes conexión a internet'
  );

  constructor() {
    // this.network = this.networkService.isOnline();

    effect(() => {
      // document.body.style.overflow = !this.network() ? 'hidden' : 'auto';
      this.showNetworkMessage.set(true);
      setTimeout(() => this.showNetworkMessage.set(false), 3000);
    });

    setTimeout(() => {
      this.viewAnniversary = false;
    }, 5000);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.updateYearsOfExperience();
  }

  years: number = 0;
  isAnniversary: boolean = false;

  updateYearsOfExperience() {
    const foundingYear = 1986;
    const today = new Date();
    const currentYear = today.getFullYear();
    const anniversaryDate = new Date(currentYear, 5, 14);

    this.isAnniversary =
      today.getDate() === anniversaryDate.getDate() &&
      today.getMonth() === anniversaryDate.getMonth();
    this.years = currentYear - foundingYear;
    setTimeout(() => {
      this.isAnniversary = false;
    }, 9000);
  }
}
