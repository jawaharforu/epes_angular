import { SubscriptionInfoModule } from './subscription-info.module';

describe('SubscriptionInfoModule', () => {
  let subscriptionInfoModule: SubscriptionInfoModule;

  beforeEach(() => {
    subscriptionInfoModule = new SubscriptionInfoModule();
  });

  it('should create an instance', () => {
    expect(subscriptionInfoModule).toBeTruthy();
  });
});
