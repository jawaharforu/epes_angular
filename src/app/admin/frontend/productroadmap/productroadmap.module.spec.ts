import { ProductroadmapModule } from './productroadmap.module';

describe('ProductroadmapModule', () => {
  let productroadmapModule: ProductroadmapModule;

  beforeEach(() => {
    productroadmapModule = new ProductroadmapModule();
  });

  it('should create an instance', () => {
    expect(productroadmapModule).toBeTruthy();
  });
});
