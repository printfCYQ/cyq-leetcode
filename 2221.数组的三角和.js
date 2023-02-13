/*
 * @lc app=leetcode.cn id=2221 lang=javascript
 *
 * [2221] 数组的三角和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  while (1) {
    const temp = [];
    if (nums.length === 1) {
      return nums[0];
    }
    for (let i = 0; i < nums.length - 1; i++) {
      temp.push((nums[i] + nums[i + 1]) % 10);
    }
    nums = temp;
  }
};
// @lc code=end
