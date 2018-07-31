import { GeneralSettingsModule } from './general-settings.module';

describe('GeneralSettingsModule', () => {
  let generalSettingsModule: GeneralSettingsModule;

  beforeEach(() => {
    generalSettingsModule = new GeneralSettingsModule();
  });

  it('should create an instance', () => {
    expect(generalSettingsModule).toBeTruthy();
  });
});
