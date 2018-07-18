import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerWithUsComponent } from './partner-with-us.component';

describe('PartnerWithUsComponent', () => {
  let component: PartnerWithUsComponent;
  let fixture: ComponentFixture<PartnerWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
