import { driver, browser } from './driver';
import Screenshot from '../selenium/Screenshot';
import PageFactory from '../pages/Factory';

module.exports = function World() {
  this.driver = driver;
  this.browser = browser;

  this.screenshot = new Screenshot(this.browser);
  this.screenshot.ensureDirectoryExists();

  this.pageFactory = new PageFactory(this);
};
