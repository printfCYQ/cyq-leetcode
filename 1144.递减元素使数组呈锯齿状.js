/*
 * @lc app=leetcode.cn id=1144 lang=javascript
 *
 * [1144] 递减元素使数组呈锯齿状
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  let oddCount = 0,
    evenCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let minNum = getMin(nums[i + 1], nums[i - 1]);
    if (i % 2) {
      if (nums[i] >= minNum) oddCount += nums[i] - minNum + 1;
    } else {
      if (nums[i] >= minNum) evenCount += nums[i] - minNum + 1;
    }
  }
  return getMin(oddCount, evenCount);
};
var getMin = (num1 = 1000, num2 = 1000) => {
  return Math.min(num1, num2);
};
const nums = [10, 4, 4, 10, 10, 6, 2, 3];
console.log(movesToMakeZigzag(nums));
// @lc code=end
