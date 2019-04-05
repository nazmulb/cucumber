module.exports = {

    elements: {
        myProfileMenu: '#pagebar > li.page_item.page-item-8 > a',
        searchInput: '#s'
    },

    /**
     * Navigate to profile page and wait for the body element to be present
     * @param {World} world - world object instance
     */
    navigateToProfilePage: async function (world) {
        const myprofile = this.elements.myProfileMenu;

        await world.helper.waitFor(myprofile);
        var el = await world.helper.findElement(myprofile);
        await el.click();
        await world.sleep(2000);

        // now wait for the body element to be present
        await world.helper.waitFor('body');
    },

    /**
     * Enters a search term into search box and presses enter
     * @param {World} world - world object instance
     * @param {string} searchQuery - search query text
     */
    preformSearch: async function (world, searchQuery) {
        const searchInput = this.elements.searchInput;

        await world.helper.waitFor(searchInput);
        el = await world.helper.findElement(searchInput);

        await world.helper.scrollToElement(el);
        await el.sendKeys(searchQuery);
        await el.sendKeys(world.selenium.Key.ENTER);
    },

    /**
     * Match the title
     * @param {World} world - world object instance
     * @param {string} expectedTitle - expected title to match
     */
    titleEquals: async function (world, expectedTitle) {
        const actualTitle = await world.driver.getTitle();
        world.expect(actualTitle).to.equal(expectedTitle);
    }
};