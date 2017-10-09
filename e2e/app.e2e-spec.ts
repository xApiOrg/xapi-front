import { TestProjectyPage } from './app.po';

describe('test-projecty App', () => {
  let page: TestProjectyPage;

  beforeEach(() => {
    page = new TestProjectyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
