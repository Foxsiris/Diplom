import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsnovSvedComponent } from './osnov-sved.component';

describe('OsnovSvedComponent', () => {
  let component: OsnovSvedComponent;
  let fixture: ComponentFixture<OsnovSvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsnovSvedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsnovSvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
