import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJdComponent } from './edit-jd.component';

describe('EditJdComponent', () => {
  let component: EditJdComponent;
  let fixture: ComponentFixture<EditJdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
