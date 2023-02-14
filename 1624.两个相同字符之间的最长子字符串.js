/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const firstIndex = new Array(26).fill(-1);
  let max = -1;
  for (let i = 0; i < s.length; i++) {
    let index = firstIndex[s[i].charCodeAt() - "a".charCodeAt()];
    if (index < 0) {
      firstIndex[s[i].charCodeAt() - "a".charCodeAt()] = i;
    } else {
      max = Math.max(max, i - index - 1);
    }
  }
  return max;
};
// @lc code=end
