import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTeachersMainComponent } from './all-teachers-main.component';

describe('AllTeachersMainComponent', () => {
  let component: AllTeachersMainComponent;
  let fixture: ComponentFixture<AllTeachersMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTeachersMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTeachersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
