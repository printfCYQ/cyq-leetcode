/*
 * @lc app=leetcode.cn id=2540 lang=javascript
 *
 * [2540] 最小公共值
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  for (let i = 0, j = 0; i < nums1.length && j < nums2.length; ) {
    if (nums1[i] === nums2[j]) return nums1[i];
    if (nums1[i] > nums2[j]) j++;
    if (nums1[i] < nums2[j]) i++;
  }
  return -1;
};
const nums1 = [1, 2, 3],
  nums2 = [2, 4];
console.log(getCommon(nums1, nums2));
// @lc code=end
