const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const {isItFriday} = require('../../../util/day');

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

When('I pick {color}', function (color) {
    console.log("You picked: "+color);
});

Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer);
});