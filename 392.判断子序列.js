/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    let index = t.indexOf(s[i]);
    if (!findWord(t, index, s[i])) return false;
  }
  return true;
};

var findWord = function (t, index, str) {
  for (let i = index; i < t.length; i++) {
    if (t[i] === str) return true;
  }
  return false;
};
// @lc code=end
