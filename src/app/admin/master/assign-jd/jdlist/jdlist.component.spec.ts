import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JDListComponent } from './jdlist.component';

describe('JDListComponent', () => {
  let component: JDListComponent;
  let fixture: ComponentFixture<JDListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JDListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JDListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
