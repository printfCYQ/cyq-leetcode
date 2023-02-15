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
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] - nums[i] === k) {
        count++;
      }
    }
  }
  return count;
};
const nums = [3, 2, 1, 5, 4],
  k = 2;
console.log(countKDifference(nums, k));
// @lc code=end
