const Driver = require("../Driver");
const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');

/**
 * Chrome Driver Related Methods
 */
class ChromeDriver extends Driver {
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
                    browserName: 'chrome',
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    chromeOptions: {
                        args: ['start-maximized', 'disable-extensions']
                },
                path: chromedriver.path
                }).build();
    }
}

module.exports = ChromeDriver;