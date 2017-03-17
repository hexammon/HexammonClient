import { HexonardsClientPage } from './app.po';

describe('hexonards-client App', () => {
  let page: HexonardsClientPage;

  beforeEach(() => {
    page = new HexonardsClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
