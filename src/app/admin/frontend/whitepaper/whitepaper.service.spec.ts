import { TestBed, inject } from '@angular/core/testing';

import { WhitepaperService } from './whitepaper.service';

describe('WhitepaperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WhitepaperService]
    });
  });

  it('should be created', inject([WhitepaperService], (service: WhitepaperService) => {
    expect(service).toBeTruthy();
  }));
});
