import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsBannerComponent } from './faqs-banner.component';

describe('FaqsBannerComponent', () => {
  let component: FaqsBannerComponent;
  let fixture: ComponentFixture<FaqsBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
