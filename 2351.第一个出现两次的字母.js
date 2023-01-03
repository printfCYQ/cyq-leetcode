/*
 * @lc app=leetcode.cn id=2351 lang=javascript
 *
 * [2351] 第一个出现两次的字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      return s[i];
    }
    set.add(s[i]);
  }
};
// @lc code=end
