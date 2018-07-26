import { ProducttourModule } from './producttour.module';

describe('ProducttourModule', () => {
  let producttourModule: ProducttourModule;

  beforeEach(() => {
    producttourModule = new ProducttourModule();
  });

  it('should create an instance', () => {
    expect(producttourModule).toBeTruthy();
  });
});
