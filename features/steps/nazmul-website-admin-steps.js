const { Given, When, Then } = require('cucumber');

When('I try to login', async function () {
    await this.page.preformLogin();
});