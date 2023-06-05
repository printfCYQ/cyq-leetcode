/*
 * @lc app=leetcode.cn id=2460 lang=javascript
 *
 * [2460] 对数组执行操作
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums[i - 1] = nums[i - 1] * 2;
      nums[i] = 0;
    }
  }
  const res = [];
  let countZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      res.push(nums[i]);
    } else {
      countZero++;
    }
  }
  res.push(...new Array(countZero).fill(0));
  return res;
};
const nums = [1, 2, 2, 1, 1, 0];
console.log(applyOperations(nums));
// @lc code=end
