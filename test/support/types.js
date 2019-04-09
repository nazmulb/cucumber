const { defineParameterType } = require('cucumber');

const colorRegExp = /white|red|green|blue|yellow/;

// Define a new parameter type and optionally convert an output parameter into something else.
defineParameterType({
    name: 'color',
    regexp: colorRegExp,
    transformer: s => s.toUpperCase()
  });