import { JdModule } from './jd.module';

describe('JdModule', () => {
  let jdModule: JdModule;

  beforeEach(() => {
    jdModule = new JdModule();
  });

  it('should create an instance', () => {
    expect(jdModule).toBeTruthy();
  });
});
