import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRIndexComponent } from './hrindex.component';

describe('HRIndexComponent', () => {
  let component: HRIndexComponent;
  let fixture: ComponentFixture<HRIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
