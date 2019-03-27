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
            .forBrowser("chrome")
            .build();
};
  
const buildFirefoxDriver = function() {
    return new driver.Builder()
            .forBrowser("firefox")
            .build();
};

const buildDriver = function(platform) {
    switch(platform) {
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