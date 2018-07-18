import { QuestionModule } from './question.module';

describe('QuestionModule', () => {
  let questionModule: QuestionModule;

  beforeEach(() => {
    questionModule = new QuestionModule();
  });

  it('should create an instance', () => {
    expect(questionModule).toBeTruthy();
  });
});
