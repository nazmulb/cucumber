# Cucumber 

Cucumber is a tool that supports BDD. So let's talk about TDD and BDD.

## What is TDD?

Test-Driven Development (TDD) is a software development technique where automated tests are written before the code. Developers use those tests to drive the development. 

<img alt="TDD" src="https://raw.githubusercontent.com/nazmulb/cucumber/master/images/tdd.png" width="400px" />


## What is BDD?

Behavior Driven Development (BDD) is an extension to the concept of TDD, but instead of testing your code you are testing your product, and specifically that your product behaves as you desire it to. 


## What is the difference between TDD and BDD?

- The way the tests are written and structured is different.
- In TDD tests are written using programming languages so the tests are written, maintained and understood by the developers who wrote the code they are testing.
- In BDD test are written in natural languages (e.g. English) so tests are written, maintained and understood by anyone as non-programmers (e.g. QA, Product Owner, etc).
- BDD explains the behavior of an application for the end user while TDD focuses on how functionality is implemented. Changes on functionality can be accommodated with less impact in BDD as opposed to TDD.

## What is Gherkin?

Gherkin allows for test scripts to be written in a human readable format, which can then be shared between all of the stakeholders in the product development.

It gives you the ability to remove logic details from behavior tests. Gherkin serves two purposes: serving as your product documentation and automated tests.

Gherkin files typically have a `.feature` file extension that contain tests, written in the Gherkin language.

```feature
Given I navigate to the "nazmul website" page
When I click my profile link
And I search for "Mac"
Then I see title "Mac | Search Results | Nazmul Website"
```

Straight away we can see that this test tells us **what** to do and not **how** to do it. It is written in a language that makes sense to anyone reading it, and — importantly — that will most likely be correct no matter how the end product might be tweaked. The product UI could be changed completely, but as long as the functionality is equivalent then the Gherkin is still accurate.

## What is Cucumber?

Gherkin is a simple syntax for natural language tests, and Cucumber is a testing framework for behavior driven development that can execute them.

## What is the advantages of Cucumber?

- It is helpful to involve business stakeholders who can't easily read code.
- Cucumber Testing focuses on end-user experience.
- Style of writing tests allow for easier reuse of code in the tests.
- Quick and easy set up and execution.
- Efficient tool for testing.

## What is the concept of features, scenarios and steps?

In a Gherkin defined test, you have the concept of *features* and *scenarios*. These are analogous to test suites and test cases in other testing frameworks, allowing for a clean way to structure your tests.

A **scenario** is literally just a single test. It should test exactly one thing in your application.

A **feature** is a group of related scenarios. As such, it will test many related things in your application. Ideally the features in the Gherkin files will closely map on to the Features in the application — hence the name.

Every Gherkin file contains exactly one feature, and every feature contains one or more scenarios.

Scenarios are then comprised of **steps**, which are ordered in a specific manner:

- **Given** – These steps are used to set up the initial state before you do your test.
- **When** – These steps are the actual test that is to be executed.
- **Then** – These steps are used to assert on the outcome of the test.

Ideally each scenario should be a single test case, so the number of When steps should be kept very small.

Steps are entirely optional. If you have no need to set anything up at all, you might have no Given steps, for example.

## What is Step Definitions?

Step definitions map (or “glue”) each Gherkin step to programming code to carry out the action that should be performed by the step.

Step definitions can be written in many programming languages. Here is an example using JavaScript:

```js
Given('I navigate to the {string} page', function (pageName) {
    console.log('Page Name: ' + pageName);
});
```

A step definition’s expression can either be a Regular Expression or a Cucumber Expression. If you prefer to use Regular Expressions, each *capture group* from the match will be passed as arguments to the step definition’s function.

```js
Given(/I navigate to the (\w+) page/, function (pageName) {
    console.log('Page Name: ' + pageName);
});
```

Step definitions aren’t linked to a particular feature file or scenario. The file, class or package name of a step definition does not affect what Gherkin steps it will match. The only thing that matters is the step definition’s expression.

A step definition can transfer state to a subsequent step definition by storing state in instance variables. Please note that if you use arrow functions, you won’t be able to share state between steps!

```js
Given('I navigate to the {string} page', pageName => {
  // Don't do this. The value of "this" is the "global" object
  this.pageName = pageName;
});
```

## Who Does What?

Who should be writing Gherkin documents, and who should write step definitions?

Product owners, business analysts, programmers and testers are often confused about who should take on what responsibilities.

### The Three Amigos:

*The Three Amigos* is a meeting that takes user stories and turns them into clean, thorough Gherkin scenarios. It involves three voices (at least):

- **The product owner** - This person is most concerned with the scope of the application. The product owner is responsible for deciding the acceptance criteria with examples.
- **The tester** - This person will be generating lots of Scenarios, and lots of edge cases. How will the application break? What user stories have we not accounted for within these Features?
- **The developer** - This person will add the Step definitions of the Scenarios.

These conversations can produce great tests, because each amigo sees the product from a different perspective. For this reason it is *essential* that all of these roles have conversations to discover examples together by using <a href="https://cucumber.io/blog/example-mapping-introduction/">Example Mapping</a> technique.

## Installation:

As we are using JavaScript so please install <a href="http://nodejs.org">Node.js</a>.

### Step 1 - Create an empty Cucumber project:

We’ll start by creating a new directory and an empty Node.js project.

```cmd
mkdir cucumber_test
cd cucumber_test
npm init -y
```

### Step 2 - Install Cucumber.js:

Add `cucumber` as a development dependency:

```cmd
npm install cucumber --save-dev
```

### Step 3 - Create four new directories for features, step definitions and support related codes:

```cmd
mkdir test
cd test
mkdir features steps support
cd ..
```

### Step 4 - Change `package.json` scripts to run Cucumber.js:

By convention, all of your Gherkin files (`.feature` file extension) will be kept in the `features` directory, and if you don’t instruct it otherwise then Cucumber will look in the same directory for the JavaScript code (step definitions, support, hooks, setup, etc that have `.js` file extension) to execute as well.

If you keep all of your Gherkin files in the directory `features` and all of your JavaScript code in `steps` and `support` then you could change the `test` section of `package.json` so it looks like this:

```json
{
  "name": "cucumber_test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "./node_modules/.bin/cucumber-js ./test/features --require ./test"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cucumber": "^5.1.0"
  }
}
```

The `--require` flag is including all the JavaScript files before executing features.

### Step 5 - Verify Cucumber.js installation:

To make sure everything works together correctly, let’s run Cucumber.

```cmd
npm test
```

You should see something like the following:

```cmd
0 scenarios
0 steps
0m00.000s
```

Cucumber’s output is telling us that it didn’t find anything to run.

## Write your first cucumber test:

### Step 1 - Install Chai assertion library:

```cmd
npm install chai --save-dev
```

### Step 2 - Create a feature file:

Create an empty file called `test/features/is-it-friday-yet.feature` with the following content:

```feature
Feature: Is it Friday yet?
    Everybody wants to know when it's Friday

Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "No"
```

The first line of this file starts with the keyword `Feature:` followed by a name. It’s a good idea to use a name similar to the file name.

The second line is a brief description of the feature. Cucumber does not execute this line, it’s just documentation.

The fourth line, `Scenario: Sunday is not Friday` is a <a href="#what-is-the-concept-of-features-scenarios-and-steps">scenario</a>, which is a concrete example illustrating how the software should behave.

The last three lines starting with `Given`, `When` and `Then` are the <a href="#what-is-the-concept-of-features-scenarios-and-steps">steps</a> of our scenario. This is what Cucumber will execute.

Now that we have a scenario, we can ask Cucumber to execute it.

```cmd
npm test
```

Cucumber is telling us we have one `undefined` scenario and three `undefined` steps because we didn't write matching <a href="#what-is-step-definitions">step definitions</a> to execute the test. It’s also suggesting some snippets of code that we can use to define these steps:

```cmd
UUU

Warnings:

1) Scenario: Sunday isn't Friday # test/features/is-it-friday-yet.feature:4
   ? Given today is Sunday
       Undefined. Implement with the following snippet:

         Given('today is Sunday', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       
   ? When I ask whether it's Friday yet
       Undefined. Implement with the following snippet:

         When('I ask whether it\'s Friday yet', function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       
   ? Then I should be told "No"
       Undefined. Implement with the following snippet:

         Then('I should be told {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       

1 scenario (1 undefined)
3 steps (3 undefined)
0m00.000s
```

### Step 3 - Create a step definitions file:

Copy each of the three snippets for the undefined steps and paste them into newly created `test/steps/is-it-friday-yet-steps.js` <a href="#what-is-step-definitions">step definitions</a> file:

```js
const { Given, When, Then } = require('cucumber');

Given('today is Sunday', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I ask whether it\'s Friday yet', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should be told {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
```

Run Cucumber again. This time the output is a little different:

```cmd
P--

Warnings:

1) Scenario: Sunday isn't Friday # test/features/is-it-friday-yet.feature:4
   ? Given today is Sunday # test/steps/is-it-friday-yet-steps.js:3
       Pending
   - When I ask whether it's Friday yet # test/steps/is-it-friday-yet-steps.js:8
   - Then I should be told "No" # test/steps/is-it-friday-yet-steps.js:13

1 scenario (1 pending)
3 steps (1 pending, 2 skipped)
0m00.001s
```

Cucumber found our step definitions and executed them. They are currently marked as *pending*, which means we need to make them do something useful.

### Step 4 - Change the step definition code:

Change your step definition code to this:

```js
const { Given, When, Then } = require('cucumber');
const {expect} = require('chai');

function isItFriday(today) {
    // We'll leave the implementation blank for now
}

Given('today is Sunday', function () {
    this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    expect(this.actualAnswer).to.equal(expectedAnswer);
});
```

Run Cucumber again:

```cmd
..F

Failures:

1) Scenario: Sunday isn't Friday # test/features/is-it-friday-yet.feature:4
   ✔ Given today is Sunday # test/steps/is-it-friday-yet-steps.js:8
   ✔ When I ask whether it's Friday yet # test/steps/is-it-friday-yet-steps.js:12
   ✖ Then I should be told "No" # test/steps/is-it-friday-yet-steps.js:16
       AssertionError: expected undefined to equal 'No'
           at World.<anonymous> (/Volumes/MyComputer/projects/cucumber_test/test/steps/is-it-friday-yet-steps.js:17:34)

1 scenario (1 failed)
3 steps (1 failed, 2 passed)
0m00.005s
```

That’s progress! The first two steps are passing, but the last one is failing.

### Step 5 - Change code to make the scenario pass:

Let’s do the simplest possible thing to make the scenario pass. In this case, that’s simply to make our function return `No`:

```js
const { Given, When, Then } = require('cucumber');
const {expect} = require('chai');

function isItFriday(today) {
    return 'No';
}

Given('today is Sunday', function () {
    this.today = 'Sunday';
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    expect(this.actualAnswer).to.equal(expectedAnswer);
});
```

Run Cucumber again:

```cmd
...

1 scenario (1 passed)
3 steps (3 passed)
0m00.003s
```

Congratulations! You’ve got your first green Cucumber scenario.

### Step 6 - Update the feature file to add another scenario:

Update the `is-it-friday-yet.feature` file:

```feature
Feature: Is it Friday yet?
    Everybody wants to know when it's Friday

Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "No"

Scenario: Friday is Friday
    Given today is Friday
    When I ask whether it's Friday yet
    Then I should be told "Yes"
```

### Step 7 - Update the step definition code:

We’ll need to add a step definition to set `today` to “Friday”:

```js
const { Given, When, Then } = require('cucumber');
const {expect} = require('chai');

function isItFriday(today) {
    return 'No';
}

Given('today is Sunday', function () {
    this.today = 'Sunday';
});

Given('today is Friday', function () {
    this.today = 'Friday';
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    expect(this.actualAnswer).to.equal(expectedAnswer);
});
```

When we run this test, it will fail.

```cmd
.....F

Failures:

1) Scenario: Friday is Friday # test/features/is-it-friday-yet.feature:9
   ✔ Given today is Friday # test/steps/is-it-friday-yet-steps.js:12
   ✔ When I ask whether it's Friday yet # test/steps/is-it-friday-yet-steps.js:16
   ✖ Then I should be told "Yes" # test/steps/is-it-friday-yet-steps.js:20
       AssertionError
           + expected - actual

           -No
           +Yes
       
           at World.<anonymous> (/Volumes/MyComputer/projects/cucumber_test/test/steps/is-it-friday-yet-steps.js:21:34)

2 scenarios (1 failed, 1 passed)
6 steps (1 failed, 5 passed)
0m00.004s
```

That is because we haven’t implemented the logic yet! Let’s do that next.

### Step 8 - Make it pass:

We should update our statement to actually evaluate whether or not `today` is equal to "Friday".

```js
const { Given, When, Then } = require('cucumber');
const {expect} = require('chai');

function isItFriday(today) {
    if (today === "Friday") {
        return "Yes"; 
    } else {
        return "No";
    }
}

Given('today is Sunday', function () {
    this.today = 'Sunday';
});

Given('today is Friday', function () {
    this.today = 'Friday';
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    expect(this.actualAnswer).to.equal(expectedAnswer);
});
```

Run Cucumber again:

```cmd
......

2 scenarios (2 passed)
6 steps (6 passed)
0m00.002s
```

### Step 9 - Using Example:

Let's update the `is-it-friday-yet.feature` file. We will go from `Scenario` to `Scenario Outline` when we start using multiple `Examples`.

```feature
Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario Outline: Today is or is not Friday
    Given today is "<day>"
    When I ask whether it's Friday yet
    Then I should be told "<answer>"

  Examples:
    | day            | answer |
    | Friday         | Yes   |
    | Sunday         | No   |
    | anything else! | No   |
```

The `Scenario Outline` keyword can be used to run the same `Scenario` multiple times, with different combinations of values.

A `Scenario Outline` must contain an `Examples` section. The `Scenario Outline` is run once for each row in the `Examples` section beneath it (not counting the first header row).

### Step 10 - Update the code:

We need to replace the step definitions for `today is Sunday` and `today is Friday` with one step definition that takes the value of `<day>` as a String. Update the `is-it-friday-yet-steps.js` file as follows:

```js
const { Given, When, Then } = require('cucumber');
const {expect} = require('chai');

function isItFriday(today) {
    if (today === "Friday") {
        return "Yes"; 
    } else {
        return "No";
    }
}

Given('today is {string}', function (givenDay) {
    this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
    this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
    expect(this.actualAnswer).to.equal(expectedAnswer);
});
```

Run Cucumber again:

```cmd
.........

3 scenarios (3 passed)
9 steps (9 passed)
0m00.005s
```

**Note:** We should do some refactoring by moving the `isItFriday` function out from the test code into lib or helper.

## Gherkin & Cucumber Reference:

### And, But:

If you have several `Given`’s, `When`’s, or `Then`s, you could write:

```feature
Example: Multiple Givens
    Given one thing
    Given another thing
    Given yet another thing
    When I open my eyes
    Then I should see something
    Then I shouldn't see something else
```
Or, you could make it read more fluidly by writing:

```feature
Example: Multiple Givens
    Given one thing
    And another thing
    And yet another thing
    When I open my eyes
    Then I should see something
    But I shouldn't see something else
```

### Background:

Occasionally you’ll find yourself repeating the same `Given` steps in all of the scenarios in a feature. A `Background` is run before *each* scenario In your feature file, put the `Background` before the first `Scenario`.

For example:

```feature
Feature: Addition

  Scenario: 1 + 0
   Given I start with 1
   When I add 0
   Then I end up with 1

  Scenario: 1 + 1
   Given I start with 1
   When I add 1
   Then I end up with 2
```

We can use `Background` to have common `Given` steps for all of the scenarios:

```feature
Feature: Addition

  Background:
    Given I start with 1

  Scenario: 1 + 0
    When I add 0
    Then I end up with 1

  Scenario: 1 + 1
    When I add 1
    Then I end up with 2
```
### Data Tables:

`Data Tables` can be used as a way of providing tables of data, or structured input, or many other things.

Example:

```feature
Scenario: Add numbers
    Given I start with 0
    When I add the following numbers:
        | 1 |
        | 2 |
        | 3 |
        | 4 |
    Then I end up with 10
```

For this simple example, the step will look something like this:

```js
When('I add the following numbers:', function (table) {
    this.actualAnswer = table.raw()
            .map(row => row[0])
            .map(v => parseInt(v))
            .reduce((current, next) => current + next, this.actualAnswer);
});
```

The `table` parameter we are provided is a `DataTable` object, which has a `raw` method on it that you can call. This method returns a 2D array of all the values in the data table.

For <a href="https://github.com/cucumber/cucumber-js/blob/master/features/data_tables.feature">more info</a>

### Tags:

Tags are a great way to organise your features and scenarios. A feature or scenario or can have as many tags as you like. Just separate them with spaces:

```feature
@billing @bicker
Feature: Verify billing

  @important
  Scenario: Missing product description
    Given hello
```

Tags can be placed above `Feature`, `Scenario`, `Scenario Outline` and `Examples` Gherkin elements. Tags are inherited by child elements.

```cmd
# You can tell Cucumber to only run scenarios with a particular tag
./node_modules/.bin/cucumber.js --tags "@smoke and @fast"
```

```cmd
# You can tell Cucumber to ignore scenarios with a particular tag
./node_modules/.bin/cucumber.js --tags "not @smoke"
```

```cmd
# You can run your single feature file
./node_modules/.bin/cucumber.js --spec ./test/features/is-it-friday-yet.feature
```

For <a href="https://cucumber.io/docs/cucumber/api/#tags">more info</a>

### Hooks:

Hooks are blocks of code that can run at various points in the Cucumber execution cycle. They are typically used for setup and teardown of the environment before and after each scenario.

#### Before:

`Before` hooks run before the first step of each scenario. Only use a `Before` hook for low-level logic such as starting a browser or deleting data from a database. Multiple `Before` hooks are executed in the order that they are defined.

You can declare hooks in `test/support/hooks.js`:
```js
const { Before, After, Status, BeforeAll, AfterAll } = require('cucumber');

Before(async function () {
    this.count = 0; // reset the count for every scenario. 
});
```

#### After:

`After` hooks run after the last step of each scenario, even when steps are `failed`, `undefined`, `pending`, or `skipped`. The `scenario` parameter is optional, but if you use it, you can inspect the status of the scenario. Multiple `After` hooks are executed in the **reverse** order that they are defined.

```js
After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        try{
            const data = await this.driver.takeScreenshot();
            // Attaching screenshot to report
            await this.attach(data, 'image/png');
        } catch (e) {
            console.error(e);
        }
    }

    await this.driver.quit();
});
```

#### BeforeAll:

Defines a hook which is run before all scenarios.

```js
BeforeAll(async function () {
});
```

#### AfterAll:

Defines a hook which is run after all scenarios have completed.

```js
AfterAll(async function () {
    setTimeout(() => {
        Report.generate(); // Genetare HTML report
    }, 1000)
});
```

#### Tagged hooks:

Hooks can be conditionally selected for execution based on the tags of the scenario.

```js
Before(async function () {
    // This hook will be executed before all scenarios
});

Before({tags: '@smoke'}, async function () {
    // This hook will be executed before scenarios tagged with @smoke
});
```

## Cucumber Configuration:

### Custom Parameter Types:

Text between curly braces reference a parameter type. Cucumber comes with `{int}`, `{float}`, `{word}`, `{string}` and `{}` **built-in** parameter types. We can create our own custom parameter types:

```js
When('I pick a {color}', async function (color) {
    console.log(color);
});
```

The recommended location to define custom parameter types, would be in `test/support/types.js`:

```js
const { defineParameterType } = require('cucumber');

const colorRegExp = /white|red|green|blue|yellow/;

// Define a new parameter type and optionally convert an output parameter into something else.
defineParameterType({
    name: 'color',
    regexp: colorRegExp,
    transformer: s => s.toUpperCase()
  });
```

For <a href="https://cucumber.io/docs/cucumber/cucumber-expressions/#custom-parameter-types">more info</a>

### Profiles:

In order to prevent users from having to enter the options they use every time. Users can define `cucumber.js` at the root of the project with profiles which are **groups of command line arguments**.

```js
module.exports = {
    'default': 'test/features/ --require test/',
    dry: '--dry-run',
    summary: '--format summary',
    progress: '--format progress',
    html_report: '--format json:reports/cucumber_report.json',
    parallel: '--parallel 2'
};
```

Now from CLI we can run the following:

```cmd
./node_modules/.bin/cucumber-js -p default -p html_report --tags \"@smoke\"
```

## Sharing state between steps:

### World:

Cucumber JS has a concept of the `World` which is using to sharing the code and data between steps. All of the step definitions, hooks and event handlers have access to the `World` by accessing the `this` parameter. Using world we can add helper methods, or logging.

The recommended location to define `World`, would be in `test/support/world.js`:

```js
const {setWorldConstructor} = require('cucumber');
const {expect, assert} = require('chai');

class World {
    /**
     * Instantiate the object
     * @param {JSON} attach - attach anything
     * @param {Command} parameters - sets the parameters as command
     */
    constructor({attach, parameters}) {
        this.attach = attach; // attaching screenshots to report
        this.parameters = parameters;

        this.expect = expect;
        this.assert = assert;
    }
}

setWorldConstructor(World);
```

## Browser Automation:

### Selenium WebDriver:

Cucumber is not a browser automation tool, but it works well with Selenium WebDriver.

Let's install Selenium WebDriver and browser driver:

```cmd
npm install selenium-webdriver --save-dev
npm install chromedriver --save-dev
```

`test/support/world.js`:
```js
const {setWorldConstructor} = require('cucumber');
const webdriver = require('selenium-webdriver');
const {expect, assert} = require('chai');

class World {
    /**
     * Instantiate the object
     * @param {JSON} attach - attach anything
     * @param {Command} parameters - sets the parameters as command
     */
    constructor({attach, parameters}) {
        this.attach = attach; // attaching screenshots to report
        this.parameters = parameters;

        this.expect = expect;
        this.assert = assert;

        this.driver = new webdriver.Builder()
                .forBrowser('chrome')
                .build();
    }
}

setWorldConstructor(World);
```

`test/support/hooks.js`:

```js
const { After } = require('cucumber');

After(function (scenario) {
    this.driver.quit();
});
```

`test/features/nazmul-website.feature`:

```feature
Feature: Nazmul Website Home Page

  Scenario: Nazmul website title
    Given I visit Nazmul website
    Then I see title "Nazmul Website | Personal website of Nazmul Basher"
```

`test/steps/nazmul-website-steps.js`:

```js
const { Given, Then } = require('cucumber');

Given('I visit Nazmul website', function () {
    this.driver.get('http://nazmulb.wordpress.com');
});

Then('I see title {string}', function (expectedTitle) {
    self = this;
    return this.driver.getTitle().then(function (actualTitle) {
        self.expect(actualTitle).to.equal(expectedTitle);
    });
});
```

For <a href="https://docs.seleniumhq.org/docs/03_webdriver.jsp#setting-up-a-selenium-webdriver-project">more info</a>

## A sample Project using Cucumber JS and Selenium-Webdriver for e2e Test Automation:

### Overview:

We need the following to have a browser based e2e testing using Cucumber JS:

- <a href="https://github.com/cucumber/cucumber-js">Cucumber JS</a>
- <a href="https://www.npmjs.com/package/chai">Chai</a>
- <a href="https://docs.seleniumhq.org/docs/03_webdriver.jsp#setting-up-a-selenium-webdriver-project">Selenium-Webdriver</a>
- <a href="https://www.npmjs.com/package/cucumber-html-reporter">Cucumber-Html-Reporter</a>

### Setup:

Please clone this repo and run the following commands:

```
git clone git@github.com:nazmulb/cucumber.git
npm install
```

### Environment Variables:

- **ENVIRONMENT** - (string) test environment to target - `local` or `prod`.
- **PLATFORM** - (string) browser name - `chrome` or `firefox`.
- **DEFAULT_TIMEOUT** - (int) timeout after milliseconds.
- **DEBUG** - (bool) if you need to see the logs - `true` or `false`.

### Running Tests:

Environment variables are a big part of configuration how to run the tests

Examples:

```cmd
ENVIRONMENT=prod PLATFORM=chrome DEBUG=true npm test
```

or

```cmd
npm test
```

### Test report:

<img alt="Report" src="https://raw.githubusercontent.com/nazmulb/cucumber/master/images/report.png" width="900px" />

Happy learning :)