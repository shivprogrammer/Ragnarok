'use strict';

/*
Break Camel Case

5kyu

Complete the solution so that the function will break up camel casing, using a space between words.

Example

solution('camelCasing') // => should return 'camel Casing'
*/

function solution(string) {
}

describe('Break Camel Case Code Wars', function() {
  describe('if input is camelCase', function() {
    it('output to be camel Case', done => {
      expect(solution('camelCase')).to.equal('camel Case');
      done();
    })
  })
})