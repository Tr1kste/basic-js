const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arr = num.toString().split('')
  let result

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(arr.indexOf(arr[i]), 1);
      result = arr.join('')
      break
    } else {
      result = arr[0]
    }
  }
  return +result
}

module.exports = {
  deleteDigit
};
