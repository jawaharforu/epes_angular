import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfeaturesComponent } from './ourfeatures.component';

describe('OurfeaturesComponent', () => {
  let component: OurfeaturesComponent;
  let fixture: ComponentFixture<OurfeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurfeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurfeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
