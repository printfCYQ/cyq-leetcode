/*
 * @lc app=leetcode.cn id=2529 lang=javascript
 *
 * [2529] 正整数和负整数的最大计数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let minusCount = 0;
  let positiveCount = 0;
  for (let item of nums) {
    if (item < 0) {
      minusCount++;
    } else if (item > 0) {
      positiveCount++;
    }
  }
  return Math.max(minusCount, positiveCount);
};
// @lc code=end
