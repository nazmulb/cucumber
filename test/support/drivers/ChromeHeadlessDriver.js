const Driver = require("../Driver");
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

/**
 * Chrome Headless Driver Related Methods
 */
class ChromeHeadlessDriver extends Driver {
    /**
     * Instantiate the object
     */
    constructor() {
        super();
    }

    /**
     * Build the driver with capabilities 
     * @returns {WebDriver} Driver object
     */
    build() {
        return new webdriver
                .Builder()
                .forBrowser('chrome')
                .setChromeOptions(new chrome.Options().headless())
                .build();
    }
}

module.exports = ChromeHeadlessDriver;