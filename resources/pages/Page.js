/**
 * Page Class Methods
 */
class Page {
    /**
     * Instantiate the object
     */
    constructor(world) {
        this.world = world;
    }

    static get elements() {
        return {};
    }

    /**
     * Match the title
     * @param {string} expectedTitle - expected title to match
     */
    async titleEquals(expectedTitle) {
        if(this.world.debug) console.log('titleEquals');

        const actualTitle = await this.world.driver.getTitle();
        this.world.expect(actualTitle).to.equal(expectedTitle);
    }
}

module.exports = Page;