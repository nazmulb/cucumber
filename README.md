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