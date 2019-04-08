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
     * @param {String} name - name
     */
    static create(name) {
        const fileName = './drivers/'+_.capitalize(name)+'Driver.js';

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