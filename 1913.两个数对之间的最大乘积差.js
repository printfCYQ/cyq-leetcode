/*
 * @lc app=leetcode.cn id=1913 lang=javascript
 *
 * [1913] 两个数对之间的最大乘积差
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  let w = 0, // 最大
    x = 0, // 第二大
    y = 10001, // 最小
    z = 10001; // 第二小
  for (let num of nums) {
    // 大于最大值
    if (num > w) {
      if (w !== 0) {
        // 更新第二大值
        x = w;
      }
      w = num;
    } else {
      // 小于最大值，但是大于第二大值
      if (num > x) {
        x = num;
      }
    }
    // 小于最小值
    if (num < y) {
      if (y !== 10001) {
        // 更新第二小值
        z = y;
      }
      y = num;
    } else {
      // 大于最大值，但是小于第二小值
      if (num < z) {
        z = num;
      }
    }
  }
  return w * x - y * z;
};
const nums = [5, 6, 2, 7, 4];
console.log(maxProductDifference(nums));
// @lc code=end
