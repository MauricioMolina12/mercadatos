import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsTimelineComponent } from './view-details-timeline.component';

describe('ViewDetailsTimelineComponent', () => {
  let component: ViewDetailsTimelineComponent;
  let fixture: ComponentFixture<ViewDetailsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDetailsTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDetailsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
