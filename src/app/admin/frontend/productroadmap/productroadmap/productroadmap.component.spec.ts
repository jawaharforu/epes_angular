import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductroadmapComponent } from './productroadmap.component';

describe('ProductroadmapComponent', () => {
  let component: ProductroadmapComponent;
  let fixture: ComponentFixture<ProductroadmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductroadmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductroadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
