const Promise = require('bluebird');
const _ = require('lodash');

module.exports = {    
    /**
     * This is a private function which will bind this with world
     * @param {World} world - world object instance
     * @returns {Object} this object
     */
    _init: function(world) {
        this.world = world;

        return this;
    },

    /**
     * This will return world object instance
     * @returns {World} world object
     */
    getWorld: function() {
        return this.world;
    },

    /**
     * Load or navigate to a page with the url and check the body element is present
     * @param {string} url - url to load
     * @param {integer} waitInSeconds - number of seconds to wait for page to load
     * @example
     *      helpers.loadPage('http://www.google.com');
     */
    loadPage: async function(url) {
        await this.world.driver.get(url);

        if(this.world.debug) console.log(url);
        
        // now wait for the body element to be present
        this.waitFor('body');
    },

    /**
     * Wait For
     * @returns {Promise} resolved when the current page is reloaded or refreshed
     * @example
     *      helpers.waitFor();
     */
    waitFor: async function(locator, waitInSeconds) {

        // use either passed in timeout or global default
        const timeout = (waitInSeconds) ? (waitInSeconds * 1000) : this.world.defaultTimeout;

        if (!this.world.isBrowser) {
			throw new Error('Tests are not running on a web browser, no web elements to wait for');
        }
        
        const selector = (locator.indexOf('//') === 0) ? "xpath" : "css";

        if(this.world.debug) console.log(locator);

        await this.world.driver.wait(this.world.selenium.until.elementLocated(this.world.selenium.By[selector](locator)), timeout);
    },

    /**
     * Reload or refresh page
     * @returns {Promise} resolved when the current page is reloaded or refreshed
     * @example
     *      helpers.refresh();
     */
    refresh: async function() {
        await this.world.driver.navigate().refresh();
    }
};