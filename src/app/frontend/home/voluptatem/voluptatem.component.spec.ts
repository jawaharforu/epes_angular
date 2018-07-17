import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluptatemComponent } from './voluptatem.component';

describe('VoluptatemComponent', () => {
  let component: VoluptatemComponent;
  let fixture: ComponentFixture<VoluptatemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluptatemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluptatemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
