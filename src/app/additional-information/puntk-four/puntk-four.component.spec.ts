import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntkFourComponent } from './puntk-four.component';

describe('PuntkFourComponent', () => {
  let component: PuntkFourComponent;
  let fixture: ComponentFixture<PuntkFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntkFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntkFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
