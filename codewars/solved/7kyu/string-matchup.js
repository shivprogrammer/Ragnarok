'use strict';

const expect = require('chai').expect;

/*
String Matchup

7kyu

Given two arrays of strings, return the number of times each string of the second array appears in the first array.

Example

array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']
How many times do the elements in array2 appear in array1?

'abc' appears twice in the first array (2)
'cde' appears only once (1)
'uap' does not appear in the first array (0)
Therefore, solve(array1, array2) = [2, 1, 0]
*/

function solve(a,b) {
  var output = [];
  var amountMap = new Map();

  for (let i = 0; i < a.length; i++) {
    if (!amountMap.has(a[i])) {
      amountMap.set(a[i], 1);
    }
    else {
      amountMap.set(a[i], amountMap.get(a[i]) + 1);
    }
  }

  for (let x = 0; x < b.length; x++) {
    if (amountMap.has(b[x])) {
      output.push(amountMap.get(b[x]));
    }
    else {
      output.push(0);
    }
  }

  return output;
}

// Time Complexity: O(N)
// Space Complexity: O(N) [amountMap] + O(M) [output]

describe('String Matchup | Code Wars | 7kyu', function() {
  describe('Input: ["abc", "abc","xyz","abcd","cde"], ["abc", "cde", "uap"]', function() {
    it('should return [2, 1, 0]', done => {
      expect(solve(["abc", "abc","xyz","abcd","cde"], ["abc", "cde", "uap"])).to.deep.equal([2, 1, 0]);
      done();
    })
  })

  describe('Input: ["abc", "xyz","abc", "xyz","cde"], ["abc", "cde", "xyz"]', function() {
    it('should return [2, 1, 2]', done => {
      expect(solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz'])).to.deep.equal([2, 1, 2]);
      done();
    })
  })

  describe('Input: ["quick", "brown", "fox", "is", "quick"], ["quick", "abc", "fox"]', function() {
    it('should return [2, 0, 1]', done => {
      expect(solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox'])).to.deep.equal([2, 0, 1]);
      done();
    })
  })
})
