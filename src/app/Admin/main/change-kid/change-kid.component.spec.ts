import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeKidComponent } from './change-kid.component';

describe('ChangeKidComponent', () => {
  let component: ChangeKidComponent;
  let fixture: ComponentFixture<ChangeKidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeKidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
