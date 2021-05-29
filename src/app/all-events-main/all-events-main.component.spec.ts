import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEventsMainComponent } from './all-events-main.component';

describe('AllEventsMainComponent', () => {
  let component: AllEventsMainComponent;
  let fixture: ComponentFixture<AllEventsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllEventsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEventsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
