import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproductComponent } from './ourproduct.component';

describe('OurproductComponent', () => {
  let component: OurproductComponent;
  let fixture: ComponentFixture<OurproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

