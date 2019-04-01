import Base from './Base';

export default class GoogleSearch extends Base {

  constructor(World) {
    super(World);
    this.resultsContainerLocator = { css: "div.g" };
  }

  load() {
    this.browser.get("https://www.google.com.au");
  }
  
  waitUntilVisible() {
    return this.browser.wait(this.until.titleIs("Google"));
  }

  searchFor(query) {
    this._searchField().sendKeys(query);
    return this._searchField().sendKeys(this.driver.Key.ENTER);
  }

  numberOfResults() {
    this._waitForResult();
    return this.browser.findElements(this.resultsContainerLocator).then((elements) => elements.length);
  }

  _waitForResult() {
    return this.waitUntilElementIsVisible(this.resultsContainerLocator);
  }

  _searchField() {
    return this.browser.findElement({ name: "q" });
  }

}
