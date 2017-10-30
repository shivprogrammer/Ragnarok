'use strict';

const expect = require('chai').expect;

/*
8.4 - Power Set

Write a method to return all subsets of a set
*/

var returnSubsets = function(set) {
  var subsets = [];
  var recurse = function(currSet, remainingSet) {
    subsets.push(currSet);
    for (var i = 0; i < remainingSet.length; i++) {
      recurse(currSet.concat([remainingSet[i]]), remainingSet.slice(i + 1));
    }
  }
  recurse([], set);
  return subsets;
}

console.log(returnSubsets([1, 2, 3, 4]));

describe('8.4 - Power Set | Cracking the Coding Interview | Chapter 8 - Recursion and Dynamic Programming', function() {
  describe('Input: [1, 2, 3, 4]', function() {
    it('should return [ [], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 4], [1, 3], [1, 3, 4], [1, 4], [2], [2, 3], [2, 3, 4], [2, 4], [3], [3, 4], [4] ]', done => {
      expect(returnSubsets([1, 2, 3, 4])).to.deep.equal([ [], [1], [1, 2], [1, 2, 3], [1, 2, 3, 4], [1, 2, 4], [1, 3], [1, 3, 4], [1, 4], [2], [2, 3], [2, 3, 4], [2, 4], [3], [3, 4], [4] ]);
      done();
    })
  })
})
