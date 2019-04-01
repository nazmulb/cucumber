const { Before, After, Status, BeforeAll, AfterAll } = require('cucumber');
const _ = require('lodash');
const sanitize = require('sanitize-filename');

// Before hooks run before the first step of each scenario. 
// Only use a Before hook for low-level logic such as starting a browser or deleting data from a database.
// Hooks can be conditionally selected for execution based on the tags of the scenario.
Before({tags: 'not @smoke'}, async function () {
    console.log("Execute before hook.");
});

Before({tags: "@ignore"}, async function() {
    return "skipped";
});

// After hooks run after the last step of each scenario, even when steps are failed, undefined, pending, or skipped.
// The scenario parameter is optional, but if you use it, you can inspect the status of the scenario.
// Hooks can be conditionally selected for execution based on the tags of the scenario.
After({tags: '@smoke'}, async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        try{
            // Taking screenshot
            await this.screenshot.create(this.driver, sanitize(_.toLower(scenario.pickle.name) + ".png").replace(/ /g, "_"), this.screenshotPath);
        } catch (e) {
            console.error(e);
        }
    }

    if(this.isBrowser){
        await this.driver.quit();
    }
});

// Defines a hook which is run before all scenarios.
// Multiple BeforeAll hooks are executed in the order that they are defined.
BeforeAll(async function () {
    //console.log("Execute before all hook.");
});

// Defines a hook which is run after all scenarios have completed.
// Multiple AfterAll hooks are executed in the reverse order that they are defined.
AfterAll(async function () {
    //console.log("Execute after all hook.");
});