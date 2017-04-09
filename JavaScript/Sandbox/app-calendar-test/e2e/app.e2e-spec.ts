import { AppCalendarTestPage } from './app.po';

describe('app-calendar-test App', () => {
  let page: AppCalendarTestPage;

  beforeEach(() => {
    page = new AppCalendarTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
