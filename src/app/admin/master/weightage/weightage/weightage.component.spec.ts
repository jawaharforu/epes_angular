import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightageComponent } from './weightage.component';

describe('WeightageComponent', () => {
  let component: WeightageComponent;
  let fixture: ComponentFixture<WeightageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
