import { SiteRefreshPage } from './app.po';

describe('site-refresh App', () => {
  let page: SiteRefreshPage;

  beforeEach(() => {
    page = new SiteRefreshPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
