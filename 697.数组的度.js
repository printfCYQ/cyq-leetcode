/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = new Map();
  for (let item of nums) {
    map.set(item, map.get(item) + 1 || 1);
  }
  let maxArr = []; // 存 出现最多次数的数字
  let max = 0;
  for (let item of map.entries()) {
    if (item[1] > max) {
      maxArr = [item[0]];
      max = item[1];
    } else if (item[1] === max) {
      maxArr.push(item[0]);
    }
  }
  let res = 50000;
  for (let item of maxArr) {
    let index = nums.indexOf(item);
    let lastIndex = nums.lastIndexOf(item);
    res = Math.min(res, lastIndex - index + 1);
  }
  return res;
};
// @lc code=end
