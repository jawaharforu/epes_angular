import { OrganogramModule } from './organogram.module';

describe('OrganogramModule', () => {
  let organogramModule: OrganogramModule;

  beforeEach(() => {
    organogramModule = new OrganogramModule();
  });

  it('should create an instance', () => {
    expect(organogramModule).toBeTruthy();
  });
});
