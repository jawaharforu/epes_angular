import { CompanyInformationModule } from './company-information.module';

describe('CompanyInformationModule', () => {
  let companyInformationModule: CompanyInformationModule;

  beforeEach(() => {
    companyInformationModule = new CompanyInformationModule();
  });

  it('should create an instance', () => {
    expect(companyInformationModule).toBeTruthy();
  });
});
