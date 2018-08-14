import { TestBed, inject } from '@angular/core/testing';

import { WeightageService } from './weightage.service';

describe('WeightageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeightageService]
    });
  });

  it('should be created', inject([WeightageService], (service: WeightageService) => {
    expect(service).toBeTruthy();
  }));
});
