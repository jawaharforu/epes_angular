import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdmodelComponent } from './mdmodel.component';

describe('MdmodelComponent', () => {
  let component: MdmodelComponent;
  let fixture: ComponentFixture<MdmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
