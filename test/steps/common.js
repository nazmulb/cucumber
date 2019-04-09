const { Given, When, Then } = require('cucumber');

Given('I navigate to the {string} page', async function (pageName) {
    this.page = this.pageFactory.create(pageName);
    await this.helper.loadPage(this.appUrl+this.page.url);
});

When('I reload|refresh page', async function () {
	await this.helper.refresh();
});

Then('I see title {string}', async function (expectedTitle) {
    await this.page.titleEquals(expectedTitle);
});