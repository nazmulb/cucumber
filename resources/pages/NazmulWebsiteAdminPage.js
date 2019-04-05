const Page = require('./Page');

/**
 * Nazmul Website Admin Page Class Methods
 */
class NazmulWebsiteAdminPage extends Page {
    /**
     * Get page elements
     * @returns {Object} page elements
     */
    static get elements() {
        return {
            userNameInput: '#usernameOrEmail',
            continueButton: '#primary > div > main > div > div.wp-login__container > div > form > div.card.login__form > div.login__form-action > button'
        };
    }

    /**
     * Get page specific url to navigate
     * @returns {String} page url
     */
    pageUrl() {
        if(this.world.debug) console.log('pageUrl');
        
        return '/wp-admin';
    }

    /**
     * Preform login
     */
    async preformLogin() {
        if(this.world.debug) console.log('preformLogin');

        const userNameInput = NazmulWebsiteAdminPage.elements.userNameInput;
        const continueButton = NazmulWebsiteAdminPage.elements.continueButton;

        await this.world.helper.waitFor(userNameInput);
        const uInput = await this.world.helper.findElement(userNameInput);
        const cBtn = await this.world.helper.findElement(continueButton);

        await uInput.clear();
        await uInput.sendKeys(this.world.data.user.username);
        await cBtn.click();
        await this.world.sleep(2000);
    }
}

module.exports = NazmulWebsiteAdminPage;