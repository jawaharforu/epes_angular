import { TrainingModule } from './training.module';

describe('TrainingModule', () => {
  let trainingModule: TrainingModule;

  beforeEach(() => {
    trainingModule = new TrainingModule();
  });

  it('should create an instance', () => {
    expect(trainingModule).toBeTruthy();
  });
});
