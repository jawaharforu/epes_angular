import { WhitepaperModule } from './whitepaper.module';

describe('WhitepaperModule', () => {
  let whitepaperModule: WhitepaperModule;

  beforeEach(() => {
    whitepaperModule = new WhitepaperModule();
  });

  it('should create an instance', () => {
    expect(whitepaperModule).toBeTruthy();
  });
});
