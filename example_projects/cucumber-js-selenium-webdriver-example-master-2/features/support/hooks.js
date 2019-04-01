const sanitize = require('sanitize-filename');
const _ = require('lodash');
const { browser } = require('./driver');

module.exports = function() {

  this.After(function(scenario) {
    let promise = null;
    if (scenario.isFailed()) {
      promise = this.screenshot.create(sanitize(_.toLower(scenario.getName()) + ".png").replace(/ /g, "_"));
    }
    return promise;
  });

  this.After(function() {
    return this.browser.manage().deleteAllCookies();
  });

  this.registerHandler("AfterFeatures", function() {
    return browser.quit();
  });

};
