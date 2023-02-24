/*
 * @lc app=leetcode.cn id=2357 lang=javascript
 *
 * [2357] 使数组中所有元素都等于零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var minimumOperations = function (nums) {
//   let count = 0;
//   while (true) {
//     let max = Math.max(...nums);
//     let min = Math.min(...nums.filter((item) => item));
//     if (max === 0) return count;
//     nums = nums.map((item) => {
//       return item === 0 ? item : item - min;
//     });
//     count++;
//   }
//   return count;
// };
var minimumOperations = function (nums) {
  return new Set(nums.filter((item) => item)).size;
};
const nums = [1, 5, 0, 3, 5];
console.log(minimumOperations(nums));
// @lc code=end
