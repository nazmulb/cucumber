const _ = require('lodash');

/**
 * Driver Related Methods
 */
class Driver {
    /**
     * Abstract
     */
    constructor() {
        if( new.target == Driver ) {
          throw new Error("Driver can't be instantiated directly.")
        }
    }

    /**
     * Factory
     * @param {String} driverName - class name
     */
    static create(driverName) {
        const fileName = './drivers/'+_.capitalize(driverName)+'Driver.js';

        try {
            const className = require(fileName);
            return new className();
        } 
        catch (error) {
            throw new Error(className+' driver not found');
        }
    }

    /**
     * Build the driver with capabilities 
     * @returns {WebDriver} Driver object
     */
    build() {}
}

module.exports = Driver;