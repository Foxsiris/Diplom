import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntkFiveComponent } from './puntk-five.component';

describe('PuntkFiveComponent', () => {
  let component: PuntkFiveComponent;
  let fixture: ComponentFixture<PuntkFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntkFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntkFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
