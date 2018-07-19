import { TestBed, inject } from '@angular/core/testing';

import { OrganogramService } from './organogram.service';

describe('OrganogramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganogramService]
    });
  });

  it('should be created', inject([OrganogramService], (service: OrganogramService) => {
    expect(service).toBeTruthy();
  }));
});
