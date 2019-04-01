export default class Base {

  constructor(World) {
    this.browser = World.browser;
    this.driver = World.driver;
    this.until = this.driver.until;
  }

  loadAndWaitUntilVisible() {
    this.load();
    return this.waitUntilVisible();
  }

  waitUntilElementIsVisible(locator) {
    const element = this.browser.wait(this.until.elementLocated(locator));
    return this.browser.wait(this.until.elementIsVisible(element));
  }

}
