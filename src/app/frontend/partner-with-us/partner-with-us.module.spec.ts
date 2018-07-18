import { PartnerWithUsModule } from './partner-with-us.module';

describe('PartnerWithUsModule', () => {
  let partnerWithUsModule: PartnerWithUsModule;

  beforeEach(() => {
    partnerWithUsModule = new PartnerWithUsModule();
  });

  it('should create an instance', () => {
    expect(partnerWithUsModule).toBeTruthy();
  });
});
