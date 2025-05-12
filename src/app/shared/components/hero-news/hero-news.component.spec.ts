import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNewsComponent } from './hero-news.component';

describe('HeroNewsComponent', () => {
  let component: HeroNewsComponent;
  let fixture: ComponentFixture<HeroNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
