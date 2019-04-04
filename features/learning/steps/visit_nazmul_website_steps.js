const { Given, When, Then } = require('cucumber');

Given('I visit nazmul website', async function () {
    await this.helpers.loadPage(this.appUrl);
});

When('I click my profile link', async function () {
    const myprofile = '#pagebar > li.page_item.page-item-8 > a';

    await this.helpers.waitFor(myprofile);
    var el = await this.helpers.findElement(myprofile);
    await el.click();
    await this.sleep(2000);

    // now wait for the body element to be present
    await this.helpers.waitFor('body');

    const search = '#s';
    await this.helpers.waitFor(search);
    el = await this.helpers.findElement(search);

    await el.sendKeys('mac');
    await el.sendKeys(this.selenium.Key.ENTER);
});

Then('I see title {string}', async function (expectedTitle) {
    const actualTitle = await this.driver.getTitle();
    this.expect(actualTitle).to.equal(expectedTitle);
});