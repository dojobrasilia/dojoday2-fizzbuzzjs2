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

  it('returns fizzbuzz', () => {
    assert.equal('fizzbuzz', fizzBuzz(15));
  });

});

function fizzBuzz(value) {
  if (value % 3 == 0 && value % 5 == 0) {
    return "fizzbuzz";
  }
  else if (value % 3 == 0) {
    return "fizz";
  }else if (value % 5 == 0) {
    return "buzz";
  }else {
    return value;
  }
}

// for (var i = 1; i <= 100; i++) {
//   console.log(fizzBuzz(i));
// }

// fizzbuzz(1) => 1
// fizzbuzz(2) => 2
// fizzbuzz(3) => Fizz
// fizzbuzz(5) => Buzz
// fizzbuzz(15) => FizzBuzz
