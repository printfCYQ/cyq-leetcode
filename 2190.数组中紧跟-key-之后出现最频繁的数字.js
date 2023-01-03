/*
 * @lc app=leetcode.cn id=2190 lang=javascript
 *
 * [2190] 数组中紧跟 key 之后出现最频繁的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function (nums, key) {
  const map = new Map();
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === key) {
      map.set(nums[i + 1], (map.get(nums[i + 1]) || 0) + 1);
    }
  }
  return Array.from(map).sort((a, b) => b[1] - a[1])[0][0];
};
// @lc code=end
