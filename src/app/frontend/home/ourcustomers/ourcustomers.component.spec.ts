import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcustomersComponent } from './ourcustomers.component';

describe('OurcustomersComponent', () => {
  let component: OurcustomersComponent;
  let fixture: ComponentFixture<OurcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
