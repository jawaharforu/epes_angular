import { BlogsModule } from './blog.module';

describe('BlogsModule', () => {
  let blogModule: BlogsModule;

  beforeEach(() => {
    blogModule = new BlogsModule();
  });

  it('should create an instance', () => {
    expect(blogModule).toBeTruthy();
  });
});
