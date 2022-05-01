const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The resultult should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  domains.forEach(el => {
    const domainElem = el.split('.').reverse();
    let item = '';

    for (let i = 0; i < domainElem.length; i++) {
      item += `.${domainElem[i]}`
      result[item] ? result[item]++ : result[item] = 1;
    }
  })

  return result
}

module.exports = {
  getDNSStats
};
