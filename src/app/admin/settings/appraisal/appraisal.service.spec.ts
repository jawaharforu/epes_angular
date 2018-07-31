import { TestBed, inject } from '@angular/core/testing';

import { AppraisalService } from './appraisal.service';

describe('AppraisalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppraisalService]
    });
  });

  it('should be created', inject([AppraisalService], (service: AppraisalService) => {
    expect(service).toBeTruthy();
  }));
});
