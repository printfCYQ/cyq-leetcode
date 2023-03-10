/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let res = 0;
  for (let item of nums) {
    if (item === 1) {
      count++;
    } else {
      res = Math.max(res, count);
      count = 0;
    }
  }
  return Math.max(res, count);
};
// @lc code=end
