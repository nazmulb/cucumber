var {setDefinitionFunctionWrapper} = require('cucumber');
var isGenerator = require('is-generator');
var Promise = require('bluebird');

// Definition function wrapper: If you would like to wrap step or hook definitions in with 
// some additional logic you can use this. The definitions will be wrapped after they have all been loaded 
// but before the tests begin to run. One example usage is wrapping generator functions to return promises.
setDefinitionFunctionWrapper(function (fn) {
    if (isGenerator.fn(fn)) {
      return Promise.coroutine(fn);
    } else {
      return fn;
    }
});