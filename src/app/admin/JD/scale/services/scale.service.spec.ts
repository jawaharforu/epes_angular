import { TestBed, inject } from '@angular/core/testing';

import { ScaleService } from './scale.service';

describe('ScaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScaleService]
    });
  });

  it('should be created', inject([ScaleService], (service: ScaleService) => {
    expect(service).toBeTruthy();
  }));
});
