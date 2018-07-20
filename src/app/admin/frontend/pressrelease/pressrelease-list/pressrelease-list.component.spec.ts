import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressreleaseListComponent } from './pressrelease-list.component';

describe('PressreleaseListComponent', () => {
  let component: PressreleaseListComponent;
  let fixture: ComponentFixture<PressreleaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressreleaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressreleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
