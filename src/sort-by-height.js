const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let helpArr = [];
  let preArr = [];
  let resultArr = [];

  for (let i of arr) {
    i === -1 ? preArr.push(i) : (preArr.push(0), helpArr.push(i));
  }

  helpArr.sort((a, b) => a - b);

  for (let i of preArr) {
    i === -1 ? resultArr.push(-1) : resultArr.push(helpArr.shift());
  }

  return resultArr;
}

module.exports = {
  sortByHeight
};
