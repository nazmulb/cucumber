import { expect } from 'chai';
import World from '../support/world';

module.exports = function() {
  this.World = World;

  this.Given(/^I have navigated to the (.+) page$/, function(pageName) {
    this.page = this.pageFactory.create(pageName);
    return this.page.loadAndWaitUntilVisible();
  });

};
