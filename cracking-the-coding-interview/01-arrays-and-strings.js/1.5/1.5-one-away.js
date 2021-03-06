'use strict';

const expect = require('chai').expect;

/*
1.5 - One Away

There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away

EXAMPLE:
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false
*/

function oneAway(str1, str2) {
  if (str1.length === str2.length) {
    return onlyOneReplace(str1, str2);
  }

  else if (Math.abs(str1.length - str2.length) === 1) {
    return onlyOneAddOrDelete(str1, str2);
  }

  return false;
}

function onlyOneReplace(str1, str2) {
  var differences = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) != str2.charAt(i)) {
      differences++;
    }
  }

  return differences <= 1 ? true : false;
}

function onlyOneAddOrDelete(str1, str2) {
  var pointer1 = 0;
  var pointer2 = 0;
  var differences = 0;

  while (pointer1 < str1.length && pointer2 < str2.length) {
    if (differences > 1) {
      return false;
    }
    if (str1.charAt(pointer1) === str2.charAt(pointer2)) {
      pointer1++;
      pointer2++;
    }
    else if (str1.length > str2.length) {
      differences++;
      pointer1++;
    }
    else {
      differences++;
      pointer2++;
    }
  }

  return true;
}

// Time Complexity: O(N) [length of shorter string]
// Space Complexity: O(1)

describe('1.5 - One Away | Cracking the Coding Interview | Chapter 1 - Arrays & Strings', function() {
  describe('Input: pale, pale', function() {
    it('should return true', done => {
      expect(oneAway('pale', 'pale')).to.equal(true);
      done();
    })
  })

  describe('Input: pale, ple', function() {
    it('should return true', done => {
      expect(oneAway('pale', 'ple')).to.equal(true);
      done();
    })
  })

  describe('Input: pales, pale', function() {
    it('should return true', done => {
      expect(oneAway('pales', 'pale')).to.equal(true);
      done();
    })
  })

  describe('Input: pale, bale', function() {
    it('should return true', done => {
      expect(oneAway('pale', 'bale')).to.equal(true);
      done();
    })
  })

  describe('Input: pale, bake', function() {
    it('should return false', done => {
      expect(oneAway('pale', 'bake')).to.equal(false);
      done();
    })
  })
})
