import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganogramAddComponent } from './organogram-add.component';

describe('OrganogramAddComponent', () => {
  let component: OrganogramAddComponent;
  let fixture: ComponentFixture<OrganogramAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganogramAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganogramAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
