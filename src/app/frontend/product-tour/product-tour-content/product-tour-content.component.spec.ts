import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTourContentComponent } from './product-tour-content.component';

describe('RegistrationContentComponent', () => {
  let component: ProductTourContentComponent;
  let fixture: ComponentFixture<ProductTourContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTourContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTourContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
