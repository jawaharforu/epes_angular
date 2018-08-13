import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmenttypeComponent } from './assessmenttype.component';

describe('AssessmenttypeComponent', () => {
  let component: AssessmenttypeComponent;
  let fixture: ComponentFixture<AssessmenttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmenttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmenttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
