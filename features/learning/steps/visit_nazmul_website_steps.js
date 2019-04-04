const { Given, When, Then } = require('cucumber');

Given('I visit nazmul website', async function () {
    await this.helpers.loadPage(this.appUrl);
});

When('I click my profile link', async function () {
    this.helpers.waitFor('//*[@id="pagebar"]/li[2]/a');

    const el = await this.driver.findElement(this.selenium.By.xpath('//*[@id="pagebar"]/li[2]/a'));
    await el.click();
    await this.sleep(2000);

    // now wait for the body element to be present
    this.helpers.waitFor('html');

    //const c = await body.getAttribute('class');
    //console.log(c);
});

Then('I see title {string}', async function (expectedTitle) {
    const actualTitle = await this.driver.getTitle();
    this.expect(actualTitle).to.equal(expectedTitle);
});