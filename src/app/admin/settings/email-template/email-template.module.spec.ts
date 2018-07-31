import { EmailTemplateModule } from './email-template.module';

describe('EmailTemplateModule', () => {
  let emailTemplateModule: EmailTemplateModule;

  beforeEach(() => {
    emailTemplateModule = new EmailTemplateModule();
  });

  it('should create an instance', () => {
    expect(emailTemplateModule).toBeTruthy();
  });
});
