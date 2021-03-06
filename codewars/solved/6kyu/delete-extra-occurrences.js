'use strict';

const expect = require('chai').expect;

/*
Delete occurrences of an element if it occurs more than n times

6kyu

Enough is enough!

Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like this sessions, since the motive usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them that he will only sit during the session if they show the same motive at most N times. Luckily, Alice and Bob are able to encode the motive as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

Task

Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

Example

deleteNth ([1,1,1,1],2) // return [1,1]

deleteNth ([20,37,20,21],1) // return [20,37,21]
*/

function deleteNth(arr, x) {
  var output = [];
  var inputMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (inputMap.has(arr[i])) {
      inputMap.set(arr[i], inputMap.get(arr[i]) + 1);
      if (inputMap.get(arr[i]) <= x) {
        output.push(arr[i]);
      }
    }

    if (!inputMap.has(arr[i])) {
      inputMap.set(arr[i], 1);
      output.push(arr[i]);
    }
  }

  return output;
}

// Time Complexity: O(N)
// Space Complexity: O(N) [output] + O(M) [inputMap]

describe('Delete Occurrences of an Lement if it Occurs More than N Times | 6kyu', function() {
  describe('Input: [20,37,20,21], 1', function() {
    it('Expected: [20,37,21]', done => {
      expect(deleteNth([20,37,20,21], 1)).to.deep.equal([20,37,21]);
      done();
    })
  })

  describe('Input: [1,1,3,3,7,2,2,2,2], 3', function() {
    it('Expected: [1, 1, 3, 3, 7, 2, 2, 2]', done => {
      expect(deleteNth([1,1,3,3,7,2,2,2,2], 3)).to.deep.equal([1, 1, 3, 3, 7, 2, 2, 2]);
      done();
    })
  })
})
