const { defineParameterType } = require('cucumber');

// Define a new parameter type and optionally convert an output parameter into something else.
defineParameterType({
    name: 'color',
    regexp: /red|blue|yellow/,
    transformer: s => s.toUpperCase()
  });