import { Ng2PresentationPage } from './app.po';

describe('ng2-presentation App', function() {
  let page: Ng2PresentationPage;

  beforeEach(() => {
    page = new Ng2PresentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
