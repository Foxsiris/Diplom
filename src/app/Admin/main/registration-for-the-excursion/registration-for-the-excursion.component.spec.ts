import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationForTheExcursionComponent } from './registration-for-the-excursion.component';

describe('RegistrationForTheExcursionComponent', () => {
  let component: RegistrationForTheExcursionComponent;
  let fixture: ComponentFixture<RegistrationForTheExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationForTheExcursionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationForTheExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
