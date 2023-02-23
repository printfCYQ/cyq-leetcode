/*
 * @lc app=leetcode.cn id=2544 lang=javascript
 *
 * [2544] 交替数字和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let character = String(n).length % 2 === 1;
  let res = 0;
  while (n) {
    if (character) {
      res += n % 10;
    } else {
      res -= n % 10;
    }
    character = !character;
    n = Math.floor(n / 10);
  }
  return res;
};
const n = 886996;
console.log(alternateDigitSum(n));
// @lc code=end
