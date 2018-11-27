import { ngshopSonuPage } from './app.po';

describe('ngshopSonu App', () => {
  let page: ngshopSonuPage;

  beforeEach(() => {
    page = new ngshopSonuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
