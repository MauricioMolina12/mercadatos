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

  items: string[] = [
    'Sus documentos se acumulan sin un sistema de archivo definido, lo que le impide conocer la información que posee.',
    'Carece de un sistema eficiente de almacenamiento y ocupa espacios físicos que podrían usarse de manera más productiva.',
    'Necesita métodos alternativos de conservación que aseguren el acceso rápido y seguro a su información cuando lo requiera.',
    'Un acceso oportuno a la información agiliza sus procesos internos y mejora la toma de decisiones en su negocio.',
    'Requiere una solución eficaz para distribuir documentos de manera ágil, segura y acorde a sus necesidades operativas.'
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
