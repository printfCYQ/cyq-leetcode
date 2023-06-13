/*
 * @lc app=leetcode.cn id=2475 lang=javascript
 *
 * [2475] 数组中不等三元组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k]) {
          count++;
        }
      }
    }
  }
  return count;
};

const nums = [4, 4, 2, 4, 3];
console.log(unequalTriplets(nums));
// @lc code=end
