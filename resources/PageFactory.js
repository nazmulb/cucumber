const _ = require('lodash');

/**
 * Page Factory Methods
 */
class PageFactory {
    /**
     * Instantiate the object
     */
    constructor(world) {
        this.world = world;
    }

    /**
     * Factory method
     * @param {String} name - name
     */
    create(name) {
        const fileName = './pages/'+_.upperFirst(_.camelCase(name))+'Page.js';

        try {
            const className = require(fileName);
            return new className(this.world);
        } 
        catch (error) {
            throw new Error(className+' page not found');
        }
    }
}

module.exports = PageFactory;