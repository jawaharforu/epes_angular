import { TestBed, inject } from '@angular/core/testing';

import { SubDepartmentService } from './sub-department.service';

describe('SubDepartmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubDepartmentService]
    });
  });

  it('should be created', inject([SubDepartmentService], (service: SubDepartmentService) => {
    expect(service).toBeTruthy();
  }));
});
