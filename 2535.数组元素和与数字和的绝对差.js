/*
 * @lc app=leetcode.cn id=2535 lang=javascript
 *
 * [2535] 数组元素和与数字和的绝对差
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  let x = 0,
    y = 0;
  for (let i = 0; i < nums.length; i++) {
    x += nums[i];
    while (nums[i]) {
      y += nums[i] % 10;
      nums[i] = Math.floor(nums[i] / 10);
    }
  }
  return Math.abs(x - y);
};
const nums = [1, 2, 3, 4];
console.log(differenceOfSum(nums));
// @lc code=end
