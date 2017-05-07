import { RazePage } from './app.po';

describe('raze App', () => {
  let page: RazePage;

  beforeEach(() => {
    page = new RazePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
