import { AssessmenttypeModule } from './assessmenttype.module';

describe('AssessmenttypeModule', () => {
  let assessmenttypeModule: AssessmenttypeModule;

  beforeEach(() => {
    assessmenttypeModule = new AssessmenttypeModule();
  });

  it('should create an instance', () => {
    expect(assessmenttypeModule).toBeTruthy();
  });
});
