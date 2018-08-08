import { FrontendModule } from './frontend.module';

describe('FrontendModule', () => {
  let frontendModule: FrontendModule;

  beforeEach(() => {
    frontendModule = new FrontendModule();
  });

  it('should create an instance', () => {
    expect(frontendModule).toBeTruthy();
  });
});
