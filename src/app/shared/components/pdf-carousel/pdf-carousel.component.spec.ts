import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfCarouselComponent } from './pdf-carousel.component';

describe('PdfCarouselComponent', () => {
  let component: PdfCarouselComponent;
  let fixture: ComponentFixture<PdfCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
