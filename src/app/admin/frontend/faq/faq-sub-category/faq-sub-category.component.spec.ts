import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqSubCategoryComponent } from './faq-sub-category.component';

describe('FaqSubCategoryComponent', () => {
  let component: FaqSubCategoryComponent;
  let fixture: ComponentFixture<FaqSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
