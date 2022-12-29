/*
 * @lc app=leetcode.cn id=2032 lang=javascript
 *
 * [2032] 至少在两个数组中出现的值
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const map = new Map();
  nums1 = Array.from(new Set(nums1));
  nums2 = Array.from(new Set(nums2));
  nums3 = Array.from(new Set(nums3));
  for (let item of nums1) {
    map.set(item, 1);
  }
  for (let item of nums2) {
    map.set(item, map.get(item) + 1 || 1);
  }
  for (let item of nums3) {
    map.set(item, map.get(item) + 1 || 1);
  }
  return Array.from(map.entries())
    .filter((item) => item[1] > 1)
    .map((item) => item[0]);
};
// @lc code=end
