import { WeightageModule } from './weightage.module';

describe('WeightageModule', () => {
  let weightageModule: WeightageModule;

  beforeEach(() => {
    weightageModule = new WeightageModule();
  });

  it('should create an instance', () => {
    expect(weightageModule).toBeTruthy();
  });
});
