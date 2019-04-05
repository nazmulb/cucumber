const { Given, When, Then } = require('cucumber');

Given('I visit nazmul website', async function () {
    await this.helpers.loadPage(this.appUrl);
});

When('I click my profile link', async function () {
    await this.page.nazmulWebsite.navigateToProfilePage(this);
});

When('I search for {string}', async function (searchQuery) {
    await this.page.nazmulWebsite.preformSearch(this, searchQuery);
});

Then('I see title {string}', async function (expectedTitle) {
    await this.page.nazmulWebsite.titleEquals(this, expectedTitle);
});