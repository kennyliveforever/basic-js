const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = []
    n = n.toString()
    // n = n.split('')
    for (let i of n) {
        arr.push(+i)
    }
    n = arr.reduce((sum, item) => sum + item)
    if (n > 9) {
        getSumOfDigits(n)
    } else {
      result = n
    }
    return result
}

module.exports = {
  getSumOfDigits
};
