const Page = require('./Page');

/**
 * Nazmul Website Page Class Methods
 */
class NazmulWebsitePage extends Page {
    /**
     * Get page elements
     * @returns {Object} page elements
     */
    get elements() {
        return {
            myProfileMenu: '#pagebar > li.page_item.page-item-8 > a',
            searchInput: '#s'
        };
    }

    /**
     * Navigate to profile page and wait for the body element to be present
     */
    async navigateToProfilePage() {
        if(this.world.debug) console.log('navigateToProfilePage');

        const myprofile = this.elements.myProfileMenu;

        await this.world.helper.waitFor(myprofile);
        const el = await this.world.helper.findElement(myprofile);
        await el.click();
        await this.world.sleep(2000);

        // now wait for the body element to be present
        await this.world.helper.waitFor('body');
    }

  /**
   * Enters a search term into search box and presses enter
   * @param {string} searchQuery - search query text
   */
  async preformSearch(searchQuery) {
    if(this.world.debug) console.log('preformSearch');

      const searchInput = this.elements.searchInput;

      await this.world.helper.waitFor(searchInput);
      const el = await this.world.helper.findElement(searchInput);

      await this.world.helper.scrollToElement(el);
      await el.sendKeys(searchQuery);
      await el.sendKeys(this.world.selenium.Key.ENTER);
      await this.world.sleep(2000);
  }
}

module.exports = NazmulWebsitePage;