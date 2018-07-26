import { TestBed, inject } from '@angular/core/testing';

import { ProducttourService } from './producttour.service';

describe('ProducttourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProducttourService]
    });
  });

  it('should be created', inject([ProducttourService], (service: ProducttourService) => {
    expect(service).toBeTruthy();
  }));
});
