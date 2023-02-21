/*
 * @lc app=leetcode.cn id=2161 lang=javascript
 *
 * [2161] 根据给定数字划分数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      res.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === pivot) {
      res.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      res.push(nums[i]);
    }
  }
  return res;
};
const nums = [-3, 4, 3, 2],
  pivot = 2;
console.log(pivotArray(nums, pivot));
// @lc code=end
