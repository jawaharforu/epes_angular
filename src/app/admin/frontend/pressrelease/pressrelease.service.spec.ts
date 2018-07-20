import { TestBed, inject } from '@angular/core/testing';

import { PressreleaseService } from './pressrelease.service';

describe('PressreleaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PressreleaseService]
    });
  });

  it('should be created', inject([PressreleaseService], (service: PressreleaseService) => {
    expect(service).toBeTruthy();
  }));
});
