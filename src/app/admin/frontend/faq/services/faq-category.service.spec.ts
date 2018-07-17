import { TestBed, inject } from '@angular/core/testing';

import { FaqCategoryService } from './faq-category.service';

describe('FaqCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaqCategoryService]
    });
  });

  it('should be created', inject([FaqCategoryService], (service: FaqCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
