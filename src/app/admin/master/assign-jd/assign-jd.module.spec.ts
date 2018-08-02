import { AssignJDModule } from './assign-jd.module';

describe('AssignJDModule', () => {
  let assignJDModule: AssignJDModule;

  beforeEach(() => {
    assignJDModule = new AssignJDModule();
  });

  it('should create an instance', () => {
    expect(assignJDModule).toBeTruthy();
  });
});
