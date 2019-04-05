const { Given, When, Then } = require('cucumber');

When('I click my profile link', async function () {
    await this.page.navigateToProfilePage();
});

When('I search for {string}', async function (searchQuery) {
    await this.page.preformSearch(searchQuery);
});