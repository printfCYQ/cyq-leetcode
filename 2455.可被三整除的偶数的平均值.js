/*
 * @lc app=leetcode.cn id=2455 lang=javascript
 *
 * [2455] 可被三整除的偶数的平均值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0 && nums[i] % 2 === 0) {
      sum += nums[i];
      count++;
    }
  }
  return count ? Math.floor(sum / count) : count;
};
const nums = [1, 3, 6, 10, 12, 15];
console.log(averageValue(nums));
// @lc code=end
