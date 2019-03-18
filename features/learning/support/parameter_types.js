const { defineParameterType } = require('cucumber');

defineParameterType({
    regexp: /red|blue|yellow/,
    transformer: s => s.toUpperCase(),
    name: 'color'
  });