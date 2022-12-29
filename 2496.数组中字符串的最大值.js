/*
 * @lc app=leetcode.cn id=2496 lang=javascript
 *
 * [2496] 数组中字符串的最大值
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let res = 0;
  for (let item of strs) {
    if (/[a-z]/.test(item)) {
      res = Math.max(res, item.length);
    } else {
      res = Math.max(res, Number(item));
    }
  }
  return res;
};
// @lc code=end
