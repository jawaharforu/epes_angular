import { TestBed, inject } from '@angular/core/testing';

import { HrindexService } from './hrindex.service';

describe('HrindexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HrindexService]
    });
  });

  it('should be created', inject([HrindexService], (service: HrindexService) => {
    expect(service).toBeTruthy();
  }));
});
