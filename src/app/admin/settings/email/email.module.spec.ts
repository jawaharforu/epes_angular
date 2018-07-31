import { EmailModule } from './email.module';

describe('EmailModule', () => {
  let emailModule: EmailModule;

  beforeEach(() => {
    emailModule = new EmailModule();
  });

  it('should create an instance', () => {
    expect(emailModule).toBeTruthy();
  });
});
