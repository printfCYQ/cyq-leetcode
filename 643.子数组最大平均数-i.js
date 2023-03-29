/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  //  先计算前 k 个数的和
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let res = sum;
  //  先后滑动窗口
  for (let i = k; i < nums.length; i++) {
    // 计算新窗口的和，并更新结果
    sum = sum - nums[i - k] + nums[i];
    res = Math.max(res, sum);
  }
  return res / k;
};
const nums = [-1],
  k = 1;
console.log(findMaxAverage(nums, k));
// @lc code=end
