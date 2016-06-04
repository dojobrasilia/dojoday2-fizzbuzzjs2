const assert = require('assert');

// function hello(name) {
//   return 'Hello ' + name;
// }
//
describe('FizzBuzz', () => {
  it('returns the same value', () => {
    assert.equal('1', fizzBuzz(1));
  });

  it('returns fizz', () => {
    assert.equal('fizz', fizzBuzz(3));
  });
});

function fizzBuzz(value) {
  return value % 3 == 0 ? "fizz" : value;
}

// fizzbuzz(1) => 1
// fizzbuzz(2) => 2
// fizzbuzz(3) => Fizz
// fizzbuzz(5) => Buzz
// fizzbuzz(15) => FizzBuzz
