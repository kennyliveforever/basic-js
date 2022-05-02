const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let sum = []
    let cats
    for (let i of arr) {
        cats = i.filter((item) => item == '^^')
        sum.push(cats.length)
    }
    return sum.reduce((acc, item) => acc + item, 0)
}

module.exports = {
  countCats
};
