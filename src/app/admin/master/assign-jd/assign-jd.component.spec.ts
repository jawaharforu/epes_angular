import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignJDComponent } from './assign-jd.component';

describe('AssignJDComponent', () => {
  let component: AssignJDComponent;
  let fixture: ComponentFixture<AssignJDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignJDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignJDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
