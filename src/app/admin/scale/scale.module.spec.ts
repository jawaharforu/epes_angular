import { ScaleModule } from './scale.module';

describe('ScaleModule', () => {
  let scaleModule: ScaleModule;

  beforeEach(() => {
    scaleModule = new ScaleModule();
  });

  it('should create an instance', () => {
    expect(scaleModule).toBeTruthy();
  });
});
