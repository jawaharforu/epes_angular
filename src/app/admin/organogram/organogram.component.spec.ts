import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganogramComponent } from './organogram.component';

describe('OrganogramComponent', () => {
  let component: OrganogramComponent;
  let fixture: ComponentFixture<OrganogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
