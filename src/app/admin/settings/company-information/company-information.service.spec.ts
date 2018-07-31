import { TestBed, inject } from '@angular/core/testing';

import { CompanyInformationService } from './company-information.service';

describe('CompanyInformationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyInformationService]
    });
  });

  it('should be created', inject([CompanyInformationService], (service: CompanyInformationService) => {
    expect(service).toBeTruthy();
  }));
});
