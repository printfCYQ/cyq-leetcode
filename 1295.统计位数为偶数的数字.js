/*
 * @lc app=leetcode.cn id=1295 lang=javascript
 *
 * [1295] 统计位数为偶数的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] + "").length % 2 === 0) count++;
  }
  return count;
};
const nums = [555, 901, 482, 1771];
console.log(findNumbers(nums));
// @lc code=end
