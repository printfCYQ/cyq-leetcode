/*
 * @lc app=leetcode.cn id=2341 lang=javascript
 *
 * [2341] 数组能形成多少数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const set = new Set();
  let count = 0;
  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
      count++;
    } else {
      set.add(num);
    }
  }
  return [count, set.size];
};
// @lc code=end
