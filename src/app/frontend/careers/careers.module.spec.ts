import { CareersModule } from './careers.module';

describe('CareersModule', () => {
  let careersModule: CareersModule;

  beforeEach(() => {
    careersModule = new CareersModule();
  });

  it('should create an instance', () => {
    expect(careersModule).toBeTruthy();
  });
});
