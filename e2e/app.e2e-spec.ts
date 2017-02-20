import { TerraniaPage } from './app.po';

describe('terrania App', () => {
  let page: TerraniaPage;

  beforeEach(() => {
    page = new TerraniaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
