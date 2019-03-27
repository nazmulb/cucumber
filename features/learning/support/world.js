const {setWorldConstructor} = require('cucumber');
const _ = require('lodash');
const {buildDriver} = require('./driver');
const URL = require('../../../lib/learning/URL');

// Using world we can add helper methods, or logging.
class World {
    constructor({attach, parameters}) {
        this.attach = attach;
        this.parameters = parameters;
        this.platform = process.env.PLATFORM || "chrome";
        this.env = process.env.ENVIRONMENT || "local";
        
        // browser driver instance
        this.driver = buildDriver(this.platform);
    }
    
    get isBrowser() {
        return _.isFunction(this.driver.manage);
    }

    get environment() {
        return this.env;
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