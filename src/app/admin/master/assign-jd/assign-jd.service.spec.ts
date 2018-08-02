import { TestBed, inject } from '@angular/core/testing';

import { AssignJDService } from './assign-jd.service';

describe('AssignJDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignJDService]
    });
  });

  it('should be created', inject([AssignJDService], (service: AssignJDService) => {
    expect(service).toBeTruthy();
  }));
});
