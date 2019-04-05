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

        if(this.world.debug) console.log('loadPage: '+url);
        
        // now wait for the body element to be present
        await this.waitFor('body');
    },

    /**
     * Wait for any element to be found
     * @param {string} locator - css or xpath selector element
     * @param {integer} waitInSeconds - number of seconds to wait for the element to load
     * @example
     *      helpers.waitFor('body', 15);
     */
    waitFor: async function(locator, waitInSeconds) {

        // use either passed in timeout or global default
        const timeout = (waitInSeconds) ? (waitInSeconds * 1000) : this.world.defaultTimeout;

        if (!this.world.isBrowser) {
			throw new Error('Tests are not running on a web browser, no web elements to wait for');
        }
        
        const selector = (locator.indexOf('//') === 0) ? "xpath" : "css";

        if(this.world.debug) console.log('waitFor: '+locator);

        await this.world.driver.wait(this.world.selenium.until.elementLocated(this.world.selenium.By[selector](locator)), timeout);
    },

    /**
     * To find an element on the page
     * @param {string} locator - css or xpath selector element
     * @returns {WebElementPromise} an element that can be used to issue commands against the located element
     * @example
     *      helpers.findElement('body');
     */
    findElement: async function(locator) {

        if (!this.world.isBrowser) {
			throw new Error('Tests are not running on a web browser, no web elements to wait for');
        }
        
        const selector = (locator.indexOf('//') === 0) ? "xpath" : "css";

        if(this.world.debug) console.log('findElement: '+locator);

        return this.world.driver.findElement(this.world.selenium.By[selector](locator));
    },

    /**
     * Scroll to the element
     * @param {WebElement} element - the element
     * @example
     *      helpers.scrollToElement(el);
     */
    scrollToElement: async function(element) {
        if(this.world.debug) console.log('scrollToElement');

        await this.world.driver.executeScript('arguments[0].scrollIntoView()', element);
        await this.world.sleep(1000);
    },

    /**
     * Reload or refresh page
     * @example
     *      helpers.refresh();
     */
    refresh: async function() {
        if(this.world.debug) console.log('refresh');

        await this.world.driver.navigate().refresh();
    }
};