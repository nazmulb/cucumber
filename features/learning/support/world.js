const {setWorldConstructor} = require('cucumber');
const _ = require('lodash');
const {buildDriver} = require('./driver');

// Using world we can add helper methods, or logging.
class World {
    constructor({attach, parameters}) {
        this.attach = attach;
        this.parameters = parameters;
        this.platform = process.env.PLATFORM || "chrome";
        
        // browser driver instance
        this.driver = buildDriver(this.platform);
    }
    
    get isBrowser() {
        return _.isFunction(this.driver.manage);
    }

    helloWorld(){
        console.log("Hello World!");
    }
}

setWorldConstructor(World);