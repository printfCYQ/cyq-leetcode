/*
 * @lc app=leetcode.cn id=2481 lang=javascript
 *
 * [2481] 分割圆的最少切割次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfCuts = function (n) {
  return n === 1 ? 0 : n % 2 ? n : n / 2;
};
// @lc code=end
