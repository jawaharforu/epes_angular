import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsCategoryComponent } from './faqs-category.component';

describe('FaqsCategoryComponent', () => {
  let component: FaqsCategoryComponent;
  let fixture: ComponentFixture<FaqsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
