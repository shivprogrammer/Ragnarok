'use strict';

const expect = require('chai').expect;

/*
1.9 - String Rotation

Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat").
*/

function isRotation(s1, s2) {

}

describe('1.9 - String Rotation | Cracking the Coding Interview | Chapter 1 - Arrays and Strings', function() {
  describe('s1 = "waterbottle", s2 = "erbottlewat"', function() {
    it('should return true', done => {
      expect(isRotation('waterbottle', 'erbottlewat')).to.equal(true);
      done();
    })
  })
})
