import { ContactusModule } from './contactus.module';

describe('ContactusModule', () => {
  let contactusModule: ContactusModule;

  beforeEach(() => {
    contactusModule = new ContactusModule();
  });

  it('should create an instance', () => {
    expect(contactusModule).toBeTruthy();
  });
});
