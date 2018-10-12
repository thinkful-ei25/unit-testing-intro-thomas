'use strict';

const expect = require('chai').expect;
const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzz', function() {
  it('should print out fizz, buzz, or fizzBuzz', function() {
    const normalCases = [
      {a: 10, expected: 'buzz'},
      {a: 15, expected: 'fizz-buzz'},
      {a: 3, expected: 'fizz'}  
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzz(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should raise an error if args not a number', function() {
    const badInputs = [
      ['a'],
      ['test'],
      ['$$'],
      [null],
      [false],
    ];

    badInputs.forEach(function(input) {
      expect(function(){
        fizzBuzz(input);
      }).to.throw(Error);
    });
  });

});