import { TestBed, inject } from '@angular/core/testing';

import { ValidationsService } from './validations.service';

describe('ValidationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationsService]
    });
  });

  it('should be created', inject([ValidationsService], (service: ValidationsService) => {
    expect(service).toBeTruthy();
  }));
});
