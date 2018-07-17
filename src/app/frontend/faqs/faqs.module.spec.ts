import { FaqsModule } from './faqs.module';

describe('FaqsModule', () => {
  let faqsModule: FaqsModule;

  beforeEach(() => {
    faqsModule = new FaqsModule();
  });

  it('should create an instance', () => {
    expect(faqsModule).toBeTruthy();
  });
});
