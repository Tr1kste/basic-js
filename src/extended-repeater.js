const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);

  let helpArr = [];
  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let addition = options.addition + '' || '';
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';

  if (options.addition != undefined || options.addition === null) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      helpArr.push(addition);
    }
  }

  let resultAddition = helpArr.join(additionSeparator);
  let transitStr = str + resultAddition;
  let result = [];

  for (let i = 0; i < repeatTimes; i++) {
    result.push(transitStr);
  }

  return result.join(separator);
}

module.exports = {
  repeater
};
