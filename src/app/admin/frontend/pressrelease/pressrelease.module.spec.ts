import { PressreleaseModule } from './pressrelease.module';

describe('PressreleaseModule', () => {
  let pressreleaseModule: PressreleaseModule;

  beforeEach(() => {
    pressreleaseModule = new PressreleaseModule();
  });

  it('should create an instance', () => {
    expect(pressreleaseModule).toBeTruthy();
  });
});
