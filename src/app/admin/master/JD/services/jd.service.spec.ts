import { TestBed, inject } from '@angular/core/testing';

import { JdService } from './jd.service';

describe('JdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JdService]
    });
  });

  it('should be created', inject([JdService], (service: JdService) => {
    expect(service).toBeTruthy();
  }));
});
