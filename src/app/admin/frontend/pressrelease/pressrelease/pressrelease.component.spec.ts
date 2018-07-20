import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PressreleaseComponent } from './pressrelease.component';

describe('PressreleaseComponent', () => {
  let component: PressreleaseComponent;
  let fixture: ComponentFixture<PressreleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PressreleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PressreleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
