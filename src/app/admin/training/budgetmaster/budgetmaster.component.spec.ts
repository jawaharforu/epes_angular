import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetmasterComponent } from './budgetmaster.component';

describe('BudgetmasterComponent', () => {
  let component: BudgetmasterComponent;
  let fixture: ComponentFixture<BudgetmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
