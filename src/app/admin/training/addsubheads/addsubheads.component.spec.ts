import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubheadsComponent } from './addsubheads.component';

describe('AddsubheadsComponent', () => {
  let component: AddsubheadsComponent;
  let fixture: ComponentFixture<AddsubheadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubheadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
