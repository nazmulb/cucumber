const {expect} = require('chai');
const { Given, When, Then } = require('cucumber');

Given('I visit nazmul profile page', async function () {
    await this.driver.get(this.appUrl+'/my-profile');
});

Then('I see title {string}', async function (expectedTitle) {
    await this.driver.getTitle().then(function (actualTitle) {
        expect(actualTitle).to.equal(expectedTitle);
    });
});