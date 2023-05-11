/*
 * @lc app=leetcode.cn id=1016 lang=javascript
 *
 * [1016] 子串能表示从 1 到 N 数字的二进制串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
  for (let i = 1; i <= n; i++) {
    const b = i.toString(2);
    console.log(b);
    if (!s.includes(b)) return false;
  }
  return true;
};
const s = "0110",
  n = 4;
console.log(queryString(s, n));
// @lc code=end
