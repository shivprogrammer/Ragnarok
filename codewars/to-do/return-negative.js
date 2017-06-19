'use strict';

const expect = require('chai').expect;

/*
Return negative

8kyu

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
Notes:

The number can be negative already, in which case no change is required.
Zero (0) can't be negative, see examples above.
*/

function makeNegative(num) {
  return num > 0 ? -num : num;
}

describe('Return Negative | Code Wars | 8kyu', function() {
  describe('Input: 42', function() {
    it('should return -42', done => {
      expect(makeNegative(42)).to.equal(-42);
      done();
    })
  })
})
