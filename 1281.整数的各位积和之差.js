/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  if (n === 0) return 0;
  let sum = 0,
    product = 1;
  while (n) {
    let bit = n % 10;
    n = Math.floor(n / 10);
    sum += bit;
    product *= bit;
  }
  return product - sum;
};
// @lc code=end
