import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerExperienceComponent } from './customer-experience.component';

describe('CustomerExperienceComponent', () => {
  let component: CustomerExperienceComponent;
  let fixture: ComponentFixture<CustomerExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
