import { NgLibraryPage } from './app.po';

describe('ng-library App', () => {
  let page: NgLibraryPage;

  beforeEach(() => {
    page = new NgLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
