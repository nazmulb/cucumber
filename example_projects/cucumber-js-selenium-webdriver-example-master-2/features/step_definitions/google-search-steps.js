import { expect } from 'chai';
import World from '../support/world';

module.exports = function() {
  this.World = World;

  this.When(/^I search for "([^"]*)"$/, function(searchQuery) {
    return this.page.searchFor(searchQuery);
  });

  this.Then(/^I see results$/, function() {
    return this.page.numberOfResults().then((numberOfResults) => expect(numberOfResults).to.be.above(0));
  });

};
