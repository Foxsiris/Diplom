import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourQulityComponent } from './four-qulity.component';

describe('FourQulityComponent', () => {
  let component: FourQulityComponent;
  let fixture: ComponentFixture<FourQulityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourQulityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourQulityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
