import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-why-choose-us-component',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './why-choose-us-component.component.html',
  styleUrl: './why-choose-us-component.component.scss',
})
export class WhyChooseUsComponentComponent implements OnInit {
  isDark: boolean = false;
  @ViewChildren('elementsParallax') elementsParallax!: QueryList<ElementRef>;

  constructor(
    private themeService: ThemeService,
    private utilsService: UtilsService,
    private renderer: Renderer2
  ) {
    this.themeService.darkMode$.subscribe((isDark) => {
      this.isDark = isDark;
    });
  }

  ngAfterViewInit(): void {
    if (this.elementsParallax.length) {
      this.utilsService.parallaxEffect(this.elementsParallax, 0.5);
    } else {
      this.elementsParallax.toArray().forEach((elementRef: ElementRef) => {
        this.renderer.addClass(elementRef.nativeElement, 'active');
      });
    }
  }

  ngOnInit(): void {
    this.updateVisibleItems();
  }

  items = [
    'Sus documentos se acumulan sin ningún criterio de archivo y no conoce la información que almacena.',
    'No tiene resuelto el almacenamiento de su documentación y está empleando espacios que debería mejor utilizados.',
    'Requiere medios alternos de conservación que garanticen el acceso a su información.',
    'La no obtención oportuna de la información frena o retrasa los flujos de los procesos de su negocio.',
    'Necesita distribuir documentos.',
  ];

  visibleItems: string[] = [];
  currentIndex = 0;
  lengthList: number = this.items.length;

  sliceList(type: 'next' | 'back') {
    if (type === 'next' && this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    } else if (type === 'back' && this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.updateVisibleItems();
  }

  updateVisibleItems() {
    this.visibleItems = this.items.slice(
      this.currentIndex,
      this.currentIndex + 1
    );
  }
}
