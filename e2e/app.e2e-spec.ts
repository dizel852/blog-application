import { BlogApplicationPage } from './app.po';

describe('blog-application App', () => {
  let page: BlogApplicationPage;

  beforeEach(() => {
    page = new BlogApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
