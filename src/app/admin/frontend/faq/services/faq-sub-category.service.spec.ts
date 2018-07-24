import { TestBed, inject } from '@angular/core/testing';

import { FaqSubCategoryService } from './faq-sub-category.service';

describe('FaqSubCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaqSubCategoryService]
    });
  });

  it('should be created', inject([FaqSubCategoryService], (service: FaqSubCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
