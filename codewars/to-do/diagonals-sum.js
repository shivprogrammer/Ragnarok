'use strict';

const expect = require('chai').expect

/*
7 kyu

Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

Matrix = array of n length whose elements are n length arrays of integers.
3x3 example:

diagonals( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] );

returns -> 20 // 1 + 5 + 9 + 3 + 5 + 7
*/

describe('Matrix Diagonals Sum Question Code Wars', function() {
  describe('Input: no input', function() {
    it('Expected: 0', done => {
      expect(sum()).to.equal(0);
      done();
    })
  })

  describe('Input: empty array', function() {
    it('Expected: 0', done => {
      expect(sum()).to.equal(0);
      done();
    })
  })


  describe('Input: [[1,2,3], [4,5,6], [7,8,9]])', function() {
    it('Expected: 20', done => {
      expect(sum([[1,2,3], [4,5,6], [7,8,9]])).to.equal(30)
      done();
    })
  })
})
