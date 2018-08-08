import { HrindexModule } from './hrindex.module';

describe('HrindexModule', () => {
  let hrindexModule: HrindexModule;

  beforeEach(() => {
    hrindexModule = new HrindexModule();
  });

  it('should create an instance', () => {
    expect(hrindexModule).toBeTruthy();
  });
});
