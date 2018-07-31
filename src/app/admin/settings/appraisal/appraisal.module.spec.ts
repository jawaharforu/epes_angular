import { AppraisalModule } from './appraisal.module';

describe('AppraisalModule', () => {
  let appraisalModule: AppraisalModule;

  beforeEach(() => {
    appraisalModule = new AppraisalModule();
  });

  it('should create an instance', () => {
    expect(appraisalModule).toBeTruthy();
  });
});
