import { Ang2CliBlogAppPage } from './app.po';

describe('ang2-cli-blog-app App', () => {
  let page: Ang2CliBlogAppPage;

  beforeEach(() => {
    page = new Ang2CliBlogAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
