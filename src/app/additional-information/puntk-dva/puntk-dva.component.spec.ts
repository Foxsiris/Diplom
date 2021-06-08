import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntkDvaComponent } from './puntk-dva.component';

describe('PuntkDvaComponent', () => {
  let component: PuntkDvaComponent;
  let fixture: ComponentFixture<PuntkDvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntkDvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntkDvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
