import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewsMainComponent } from './all-news-main.component';

describe('AllNewsMainComponent', () => {
  let component: AllNewsMainComponent;
  let fixture: ComponentFixture<AllNewsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllNewsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNewsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
