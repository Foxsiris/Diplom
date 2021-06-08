import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTeacherInfoComponent } from './one-teacher-info.component';

describe('OneTeacherInfoComponent', () => {
  let component: OneTeacherInfoComponent;
  let fixture: ComponentFixture<OneTeacherInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneTeacherInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTeacherInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
