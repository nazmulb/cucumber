const { Given, When, Then } = require('cucumber');

Given('I navigate to the {string} page', async function (pageName) {
    this.page = this.pageFactory.create(pageName);
    await this.helper.loadPage(this.appUrl);
});

When('I reload|refresh page', async function () {
	await this.helper.refresh();
});