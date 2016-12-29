import { TreeTableExamplePage } from './app.po';

describe('tree-table-example App', function() {
  let page: TreeTableExamplePage;

  beforeEach(() => {
    page = new TreeTableExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
