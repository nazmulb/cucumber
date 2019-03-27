const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I visit nazmul profile page', async function () {
    this.driver.get('https://nazmulb.wordpress.com/my-profile/');
});

Then('I see title {string}', async function (expectedTitle) {
    this.driver.getTitle().then(function (actualTitle) {
        assert.equal(actualTitle, expectedTitle);
    });
});