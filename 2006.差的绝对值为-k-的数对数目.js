/*
 * @lc app=leetcode.cn id=2006 lang=javascript
 *
 * [2006] 差的绝对值为 K 的数对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var countKDifference = function (nums, k) {
  let count = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    count += (map.get(nums[i] - k) || 0) + (map.get(nums[i] + k) || 0);
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  return count;
};
// @lc code=end
