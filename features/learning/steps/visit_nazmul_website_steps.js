const { Given, When, Then } = require('cucumber');

Given('I visit nazmul website', async function () {
    await this.helpers.loadPage(this.appUrl);
});

When('I click my profile link', async function () {
    const element = '#pagebar > li.page_item.page-item-8 > a';

    this.helpers.waitFor(element);
    const el = await this.helpers.findElement(element);
    await el.click();
    await this.sleep(2000);

    // now wait for the body element to be present
    this.helpers.waitFor('body');
});

Then('I see title {string}', async function (expectedTitle) {
    const actualTitle = await this.driver.getTitle();
    this.expect(actualTitle).to.equal(expectedTitle);
});