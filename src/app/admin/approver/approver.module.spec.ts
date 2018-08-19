import { ApproverModule } from './approver.module';

describe('ApproverModule', () => {
  let approverModule: ApproverModule;

  beforeEach(() => {
    approverModule = new ApproverModule();
  });

  it('should create an instance', () => {
    expect(approverModule).toBeTruthy();
  });
});
