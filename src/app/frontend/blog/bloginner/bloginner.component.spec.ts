import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloginnerComponent } from './bloginner.component';

describe('BloginnerComponent', () => {
  let component: BloginnerComponent;
  let fixture: ComponentFixture<BloginnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloginnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloginnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
