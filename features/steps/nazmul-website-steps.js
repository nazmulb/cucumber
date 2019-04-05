const { Given, When, Then } = require('cucumber');

When('I click my profile link', async function () {
    await this.page.navigateToProfilePage();
});

When('I search for {string}', async function (searchQuery) {
    await this.page.preformSearch(searchQuery);
});

Then('I see title {string}', async function (expectedTitle) {
    await this.page.titleEquals(expectedTitle);
});