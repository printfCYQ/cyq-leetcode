/*
 * @lc app=leetcode.cn id=2574 lang=javascript
 *
 * [2574] 左右元素和的差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function (nums) {
  const leftSum = [0];
  const rightSum = [0];
  for (let i = 1; i < nums.length; i++) {
    leftSum.push(leftSum[leftSum.length - 1] + nums[i - 1]);
  }
  for (let i = nums.length - 1; i > 0; i--) {
    rightSum.unshift(rightSum[0] + nums[i]);
  }
  const res = [];
  for (let i = 0; i < leftSum.length; i++) {
    res.push(Math.abs(leftSum[i] - rightSum[i]));
  }
  return res;
};

const nums = [1];
console.log(leftRigthDifference(nums));
// @lc code=end
