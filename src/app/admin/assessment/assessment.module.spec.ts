import { AssessmentModule } from './assessment.module';

describe('AssessmentModule', () => {
  let assessmentModule: AssessmentModule;

  beforeEach(() => {
    assessmentModule = new AssessmentModule();
  });

  it('should create an instance', () => {
    expect(assessmentModule).toBeTruthy();
  });
});
