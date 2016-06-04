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

  it('returns buzz', () => {
    assert.equal('buzz', fizzBuzz(5));
  });

});

function fizzBuzz(value) {
  if (value % 3 == 0) {
    return "fizz";
  }else if (value % 5 == 0) {
    return "buzz";
  }else {
    return value;
  }
}

// fizzbuzz(1) => 1
// fizzbuzz(2) => 2
// fizzbuzz(3) => Fizz
// fizzbuzz(5) => Buzz
// fizzbuzz(15) => FizzBuzz
