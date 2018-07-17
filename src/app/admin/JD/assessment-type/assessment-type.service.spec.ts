import { TestBed, inject } from '@angular/core/testing';

import { AssessmentTypeService } from './assessment-type.service';

describe('AssessmentTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssessmentTypeService]
    });
  });

  it('should be created', inject([AssessmentTypeService], (service: AssessmentTypeService) => {
    expect(service).toBeTruthy();
  }));
});
