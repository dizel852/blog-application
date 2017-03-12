import { Ang2CliAppPage } from './app.po';

describe('ang2-cli-app App', () => {
  let page: Ang2CliAppPage;

  beforeEach(() => {
    page = new Ang2CliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
