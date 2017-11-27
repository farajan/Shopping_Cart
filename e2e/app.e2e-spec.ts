import { Test69Page } from './app.po';

describe('test69 App', () => {
  let page: Test69Page;

  beforeEach(() => {
    page = new Test69Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
