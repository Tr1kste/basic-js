const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let max, min

  s1 = s1.split('');
  s2 = s2.split('');

  if (s1.length > s2.length) {
    max = s1;
    min = s2;
  } else {
    max = s2;
    min = s1;
  }

  min.forEach(el => {
    if (max.includes(el)) {
      count++;
      max.splice(max.indexOf(el), 1);
    }
  });

  return count;
}

module.exports = {
  getCommonCharacterCount
};
