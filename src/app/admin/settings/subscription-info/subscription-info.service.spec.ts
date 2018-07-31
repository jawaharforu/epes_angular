import { TestBed, inject } from '@angular/core/testing';

import { SubscriptionInfoService } from './subscription-info.service';

describe('SubscriptionInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubscriptionInfoService]
    });
  });

  it('should be created', inject([SubscriptionInfoService], (service: SubscriptionInfoService) => {
    expect(service).toBeTruthy();
  }));
});
