/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let count = 0;
  let l = 0;
  let r = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") l++;
    if (s[i] === "R") r++;
    if (l === r) {
      l = 0;
      r = 0;
      count++;
    }
  }
  return count;
};
const s = "LLLLRRRR";
console.log(balancedStringSplit(s));
// @lc code=end
