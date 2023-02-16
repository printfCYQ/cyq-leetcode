/*
 * @lc app=leetcode.cn id=2520 lang=javascript
 *
 * [2520] 统计能整除数字的位数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
  let n = num;
  let count = 0;
  while (n) {
    let a = n % 10;
    n = Math.floor(n / 10);
    if (num % a === 0) {
      count++;
    }
  }
  return count;
};
console.log(countDigits(7));
// @lc code=end
