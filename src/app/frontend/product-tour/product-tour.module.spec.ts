import { ProductTourModule } from './product-tour.module';

describe('ProductTourModule', () => {
  let productTourModule: ProductTourModule;

  beforeEach(() => {
    productTourModule = new ProductTourModule();
  });

  it('should create an instance', () => {
    expect(productTourModule).toBeTruthy();
  });
});
