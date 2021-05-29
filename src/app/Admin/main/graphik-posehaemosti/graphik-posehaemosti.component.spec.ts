import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphikPosehaemostiComponent } from './graphik-posehaemosti.component';

describe('GraphikPosehaemostiComponent', () => {
  let component: GraphikPosehaemostiComponent;
  let fixture: ComponentFixture<GraphikPosehaemostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphikPosehaemostiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphikPosehaemostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
