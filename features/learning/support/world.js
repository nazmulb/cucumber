const {setWorldConstructor} = require('cucumber');
const selenium = require('selenium-webdriver');
const {expect, assert} = require('chai');
const _ = require('lodash');
const path = require('path');
const {buildDriver} = require('./driver');
const URL = require('../../../lib/learning/URL');
const Screenshot = require('../../../lib/learning/Screenshot');

//Use dotenv to read .env vars into Node
require('dotenv').config();

// Using world we can add helper methods, or logging.
class World {
    constructor({attach, parameters}) {
        this.attach = attach;
        this.parameters = parameters;
        this.pf = process.env.PLATFORM || "chrome";
        this.env = process.env.ENVIRONMENT || "local";
        this.timeout = parseInt(process.env.DEFAULT_TIMEOUT) || 60000;
        
        // browser driver instance
        this.driver = buildDriver(this.pf);

        this.selenium = selenium;
        this.expect = expect;
        this.assert = assert;

        this.screenshotPath = path.join("reports", "screenshots");
        this.screenshot = new Screenshot();
        this.screenshot.ensureDirectoryExists(this.screenshotPath);
    }
    
    get isBrowser() {
        return _.isFunction(this.driver.manage);
    }

    get platform() {
        return this.pf;
    }

    get environment() {
        return this.env;
    }

    get defaultTimeout(){
        return this.timeout;
    }

    get appUrl() {
        const url = new URL;
        return url.getAppUrlForEnv(this.env);
    }

    helloWorld(){
        console.log("Hello World!");
    }
}

setWorldConstructor(World);