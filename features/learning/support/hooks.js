const { Before, After, Status } = require('cucumber');

// Before hooks run before the first step of each scenario. 
// Only use a Before hook for low-level logic such as starting a browser or deleting data from a database.
// Hooks can be conditionally selected for execution based on the tags of the scenario.
Before({tags: '@smoke'}, async function () {
    console.log("Execute before hook");
});

Before({tags: "@ignore"}, async function() {
    return "skipped";
});

// After hooks run after the last step of each scenario, even when steps are failed, undefined, pending, or skipped.
// The scenario parameter is optional, but if you use it, you can inspect the status of the scenario.
// Hooks can be conditionally selected for execution based on the tags of the scenario.
After({tags: '@smoke'}, async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        console.log("Execute after hook");
        try{
            // Attaching plain text
            this.attach('Some text');
        } catch (e) {
            console.error(e);
        }
    }
});