"use strict";

/* Question 04

Implement the function as defined below.

Given an array of values, the minmax() function will return an array that contains the minimum and maximum values in the array, always with minimum at index 0 and maximum at index 1. For the purposes of this question, you are not allowed to use Math.max() or Math.min().

The array can be a list of lower-cased strings instead of numbers. In this case, min is the string that would be sorted first alphabetically and max is the string that would be sorted last alphabetically ("a" < "b", while "ab" > "aa", and so on).

Mixed-type (strings and numbers) arrays are not of concern to us (meaning, do not worry about this situation).

Examples:

- minmax([1, 2, 3, 4, 5]) returns [1, 5]
- minmax([90, 89, 123, 3]) returns [3, 123]
- minmax(["apple", "banana", "canada"]) returns ["apple", "canada"]
- minmax([]) returns [undefined, undefined]

*/

const minmax = function(list) {
  if (typeof list[0] === 'string') {
    const newListWords = list.sort();
    let min = newListWords[0];
    let max = newListWords[newListWords.length - 1];
    return [min, max];
  }

  const newListNum = list.sort((a, b) => {
    if (Number(a) < Number(b)) {
      return -1;
    }
    if (Number(a) > Number(b)) {
      return 1;
    }
    return 0;
    
  });
  let min = newListNum[0];
  let max = newListNum[newListNum.length - 1];
  return [min, max];
  
};

// Don't change below:

module.exports = { minmax };
