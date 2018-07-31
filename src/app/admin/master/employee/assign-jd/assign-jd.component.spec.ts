import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignJdComponent } from './assign-jd.component';

describe('AssignJdComponent', () => {
  let component: AssignJdComponent;
  let fixture: ComponentFixture<AssignJdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignJdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignJdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
