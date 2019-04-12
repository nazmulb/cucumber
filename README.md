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

## What is Cucumber?

Gherkin is a simple syntax for natural language tests, and Cucumber is a testing framework for behavior driven development that can execute them.