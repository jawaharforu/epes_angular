import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingheadComponent } from './traininghead.component';

describe('TrainingheadComponent', () => {
  let component: TrainingheadComponent;
  let fixture: ComponentFixture<TrainingheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
