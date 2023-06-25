/*
 * @lc app=leetcode.cn id=2395 lang=javascript
 *
 * [2395] 和相等的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const set = new Set();
  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i] + nums[i - 1];
    if (set.has(sum)) {
      return true;
    }else{
      set.add(sum);
    }
  }
  return false;
};
const nums = [1,2,3,4,5];
console.log(findSubarrays(nums));
// @lc code=end
