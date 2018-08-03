import { TestBed, inject } from '@angular/core/testing';

import { BudgetmasterService } from './budgetmaster.service';

describe('BudgetmasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetmasterService]
    });
  });

  it('should be created', inject([BudgetmasterService], (service: BudgetmasterService) => {
    expect(service).toBeTruthy();
  }));
});
