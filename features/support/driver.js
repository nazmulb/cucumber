const chromedriver = require('chromedriver');
const firefox = require('geckodriver');
const driver = require('selenium-webdriver');

const buildAndroidDriver = function () {
    return new driver.Builder()
            .usingServer('http://localhost:4723/wd/hub')
            .withCapabilities({
                platformName: 'Android',
                platformVersion: '4.4',
                deviceName: 'Android Emulator',
                browserName: 'Chrome'
            })
            .build();
};

const buildChromeDriver = function() {
    return new driver.Builder()
            .withCapabilities({
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    args: ['start-maximized', 'disable-extensions']
              },
              path: chromedriver.path
            }).build();
};
  
const buildFirefoxDriver = function() {
    return new driver.Builder()
            .withCapabilities({
                browserName: 'firefox',
                javascriptEnabled: true,
                acceptSslCerts: true,
                'webdriver.firefox.bin': firefox.path
            }).build();
};

const buildDriver = function(platform) {
    switch(platform.toLowerCase()) {
      case 'android':
        return buildAndroidDriver();
      case 'firefox':
        return buildFirefoxDriver();
      default:
        return buildChromeDriver();
    }
};

module.exports = {
    buildAndroidDriver,
    buildChromeDriver,
    buildFirefoxDriver,
    buildDriver
};