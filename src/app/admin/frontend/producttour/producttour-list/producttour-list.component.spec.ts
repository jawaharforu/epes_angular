import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttourListComponent } from './producttour-list.component';

describe('ProducttourListComponent', () => {
  let component: ProducttourListComponent;
  let fixture: ComponentFixture<ProducttourListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttourListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
