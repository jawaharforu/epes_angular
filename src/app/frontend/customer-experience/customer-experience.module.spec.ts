import { CustomerExperienceModule } from './customer-experience.module';

describe('CustomerExperienceModule', () => {
  let customerExperienceModule: CustomerExperienceModule;

  beforeEach(() => {
    customerExperienceModule = new CustomerExperienceModule();
  });

  it('should create an instance', () => {
    expect(customerExperienceModule).toBeTruthy();
  });
});
