import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { UtilsService } from '../../services/utils.service';
import { CustomersService } from '../../services/customers.service';
import { Entity } from '../../models/customers';

@Component({
  selector: 'app-our-customers',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './our-customers.component.html',
  styleUrl: './our-customers.component.scss',
})
export class OurCustomersComponent implements OnInit, OnDestroy {
  isPaused = false;
  isPausedSecond = false;
  isDark: boolean = false;
  private observer!: any;
  customers: Entity[] = [];
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;
  privateCustomers: Entity[] = [];
  publicCustomers: Entity[] = [];

  constructor(
    private themeService: ThemeService,
    private utilsService: UtilsService,
    private customersService: CustomersService,
    private renderer: Renderer2
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  ngAfterViewInit(): void {
    if (this.elementsParallax.length) {
      this.utilsService.parallaxEffect(this.elementsParallax, 0.2);
    } else {
      this.elementsParallax.toArray().forEach((elementRef: ElementRef) => {
        this.renderer.addClass(elementRef.nativeElement, 'active');
      });
    }
  }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.publicCustomers = this.customers.filter(c=>c.type === 'PÚBLICA');
      this.privateCustomers = this.customers.filter(c=> c.type === 'PRIVADA');
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnected();
    }
  }

  pauseSlider(slider: string): void {
    switch (slider) {
      case 'first':
        this.isPaused = true;
        break;
      case 'second':
        this.isPausedSecond = true;
        break;
    }
  }

  resumeSlider(slider: string): void {
    switch (slider) {
      case 'first':
        this.isPaused = false;
        break;
      case 'second':
        this.isPausedSecond = false;
        break;
    }
  }
}
