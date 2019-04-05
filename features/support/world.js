const {setWorldConstructor} = require('cucumber');
const selenium = require('selenium-webdriver');
const {expect, assert} = require('chai');
const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const {buildDriver} = require('./driver');
const URL = require('./URL');
const Screenshot = require('./Screenshot');
const helpers = require('./helpers');
const nazmulWebsite = require('../../resources/page-objects/nazmul-website');


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
        this.debug = (process.env.DEBUG == "true" ? true : false) || false;
        
        // browser driver instance
        this.driver = buildDriver(this.pf);
        this.driver.manage().window().maximize();

        this.selenium = selenium;
        this.expect = expect;
        this.assert = assert;

        this.screenshot = new Screenshot(this);
        this.screenshot.ensureDirectoryExists();

        this.helpers = helpers._init(this);

        this.page = {nazmulWebsite: nazmulWebsite};
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

    sleep(milliseconds){
        return Promise.delay(milliseconds);
    }
}

setWorldConstructor(World);