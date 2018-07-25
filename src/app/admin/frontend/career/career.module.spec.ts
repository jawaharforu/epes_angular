import { CareerModule } from './career.module';

describe('CareerModule', () => {
  let careerModule: CareerModule;

  beforeEach(() => {
    careerModule = new CareerModule();
  });

  it('should create an instance', () => {
    expect(careerModule).toBeTruthy();
  });
});
