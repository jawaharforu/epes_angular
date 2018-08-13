import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedQuestionsComponent } from './assigned-questions.component';

describe('AssignedQuestionsComponent', () => {
  let component: AssignedQuestionsComponent;
  let fixture: ComponentFixture<AssignedQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
