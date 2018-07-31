import { TestBed, inject } from '@angular/core/testing';

import { GeneralSettingsService } from './general-settings.service';

describe('GeneralSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralSettingsService]
    });
  });

  it('should be created', inject([GeneralSettingsService], (service: GeneralSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
