import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductroadmapListComponent } from './productroadmap-list.component';

describe('ProductroadmapListComponent', () => {
  let component: ProductroadmapListComponent;
  let fixture: ComponentFixture<ProductroadmapListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductroadmapListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductroadmapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
