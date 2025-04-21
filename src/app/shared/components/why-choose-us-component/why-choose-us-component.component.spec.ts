import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseUsComponentComponent } from './why-choose-us-component.component';

describe('WhyChooseUsComponentComponent', () => {
  let component: WhyChooseUsComponentComponent;
  let fixture: ComponentFixture<WhyChooseUsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyChooseUsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyChooseUsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
