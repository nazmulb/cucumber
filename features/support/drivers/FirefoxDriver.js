const Driver = require("../Driver");
const firefox = require('geckodriver');
const webdriver = require('selenium-webdriver');

/**
 * Firefox Driver Related Methods
 */
class FirefoxDriver extends Driver {
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
        return new webdriver.Builder()
                .withCapabilities({
                    browserName: 'firefox',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    'webdriver.firefox.bin': firefox.path
                }).build();
    }
}

module.exports = FirefoxDriver;