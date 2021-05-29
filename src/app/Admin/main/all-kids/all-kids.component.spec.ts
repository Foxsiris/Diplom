import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllKidsComponent } from './all-kids.component';

describe('AllKidsComponent', () => {
  let component: AllKidsComponent;
  let fixture: ComponentFixture<AllKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllKidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
