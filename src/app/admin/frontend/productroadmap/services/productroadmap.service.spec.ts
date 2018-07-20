import { TestBed, inject } from '@angular/core/testing';

import { ProductroadmapService } from './productroadmap.service';

describe('ProductroadmapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductroadmapService]
    });
  });

  it('should be created', inject([ProductroadmapService], (service: ProductroadmapService) => {
    expect(service).toBeTruthy();
  }));
});
