import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAssignComponent } from './question-assign.component';

describe('QuestionAssignComponent', () => {
  let component: QuestionAssignComponent;
  let fixture: ComponentFixture<QuestionAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
