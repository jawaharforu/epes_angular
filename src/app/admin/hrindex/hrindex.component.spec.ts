import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrindexComponent } from './hrindex.component';

describe('HrindexComponent', () => {
  let component: HrindexComponent;
  let fixture: ComponentFixture<HrindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
