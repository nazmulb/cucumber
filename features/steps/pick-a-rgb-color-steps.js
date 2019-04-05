const { Given, When, Then } = require('cucumber');
const Color = require('../../lib/Color');

Given('Initialise the all colors', async function () {
    this.color = new Color();
});

When('I pick {color}', async function (color) {
    this.actualAnswer = this.color.isFound(color);
});

Then('The color you picked is {string} under rgb', async function (expectedAnswer) {
    this.expect(this.actualAnswer).to.equal(expectedAnswer);
});