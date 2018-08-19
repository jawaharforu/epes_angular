import { TestBed, inject } from '@angular/core/testing';

import { ApproverService } from './approver.service';

describe('ApproverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApproverService]
    });
  });

  it('should be created', inject([ApproverService], (service: ApproverService) => {
    expect(service).toBeTruthy();
  }));
});
