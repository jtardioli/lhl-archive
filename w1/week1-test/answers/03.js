/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  let obj = {};
  for (let item of arr) {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item] += 1;
  }

  let maxValue = 0;
  let mode = 0;
  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      mode = Number(key);
    }
  }
  
  return mode;
};

// Don't change below:

module.exports = { mode };
