import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEventsComponent } from './change-events.component';

describe('ChangeEventsComponent', () => {
  let component: ChangeEventsComponent;
  let fixture: ComponentFixture<ChangeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
