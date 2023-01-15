/*
 * @lc app=leetcode.cn id=2293 lang=javascript
 *
 * [2293] 极大极小游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  while (nums.length > 1) {
    let temp = [];
    let flag = true;
    for (let i = 0; i < nums.length; i += 2) {
      if (flag) {
        temp.push(Math.min(nums[i], nums[i + 1]));
        flag = false;
      } else {
        temp.push(Math.max(nums[i], nums[i + 1]));
        flag = true;
      }
    }
    nums = temp;
  }
  return nums[0];
};
// @lc code=end
