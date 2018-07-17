import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTourBannerComponent } from './product-tour-banner.component';

describe('ProductTourBannerComponent', () => {
  let component: ProductTourBannerComponent;
  let fixture: ComponentFixture<ProductTourBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTourBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTourBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
