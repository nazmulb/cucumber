const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const Day = require('../../../lib/Day');

Given('today is {string}', async function (givenDay) {
    this.today = givenDay;
});

When('I ask whether it\'s Friday yet', async function () {
    var day = new Day();
    this.actualAnswer = day.isItFriday(this.today);
});

When('I pick {color}', async function (color) {
    console.log("You picked: "+color);
});

Then('I should be told {string}', async function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});