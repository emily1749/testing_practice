const assert = require('chai').assert;
// const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const app = require('../app');

//Results
sayHelloResult = app.sayHello();
addNumbersResult - app.addNumbers(5, 5);
describe('App', function() {
  it('app should return hello', function() {
    // assert.equal(app(), 'hello');
    let result = app.sayHello();
    assert.equal(result, 'hello');
  });

  it('sayHello should return type string', function() {
    let result = app.sayHello();
    assert.typeOf(result, 'string');
  });

  it('addNumbers should be abovve 5', function() {
    let result = app.addNumbers(5, 5);
    assert.isAbove(result, 5);
  });

  it('addNumbers should return type number', function() {
    let result = app.addNumbers(5, 5);
    assert.typeOf(result, 'number');
  });
});
