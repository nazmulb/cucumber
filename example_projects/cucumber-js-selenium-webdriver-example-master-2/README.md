# `cucumber-js` & `selenium-webdriver` starter

[![Build Status](https://travis-ci.org/MYOB-Technology/cucumber-js-selenium-webdriver-example.svg)](https://travis-ci.org/MYOB-Technology/cucumber-js-selenium-webdriver-example)

## Overview
An example of browser based testing via:
* [cucumber-js](https://github.com/cucumber/cucumber-js)
* [selenium-webdriver](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs), running tests on Firefox via [geckodriver](https://github.com/mozilla/geckodriver)
* Use of [page objects](http://martinfowler.com/bliki/PageObject.html)
* Use of ES6 & ES7 syntax

Note that `selenium-webdriver` encourages polling for browser state, and consequently heavily uses [promises](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise).
To simplify working with promises, `selenium-webdriver` uses a library that affords working with them in a more imperative style.
See [here](http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/promise.html) for more information.

## Tasks

    // Cleans and installs dependencies
    npm run setup

    // Runs the tests
    npm test
