import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightageListComponent } from './weightage-list.component';

describe('WeightageListComponent', () => {
  let component: WeightageListComponent;
  let fixture: ComponentFixture<WeightageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
