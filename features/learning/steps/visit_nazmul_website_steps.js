const { Given, When, Then } = require('cucumber');

Given('I visit nazmul website', async function () {

    const waitInSeconds = null;
    // use either passed in timeout or global default
    const timeout = (waitInSeconds) ? (waitInSeconds * 1000) : this.defaultTimeout;
    await this.driver.get(this.appUrl);

    // now wait for the body element to be present
    await this.driver.wait(this.selenium.until.elementLocated(this.selenium.By.css('body')), timeout);
});

When('I click my profile link', async function () {
    // TODO
});

Then('I see title {string}', async function (expectedTitle) {
    const actualTitle = await this.driver.getTitle();
    this.expect(actualTitle).to.equal(expectedTitle);
});