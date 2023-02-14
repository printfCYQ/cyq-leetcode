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
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], [map.get(s[i])[0], i - map.get(s[i])[0] - 1, true]);
    } else {
      map.set(s[i], [i, 0, false]); // 最早索引,长度,是否闭合
    }
  }
  let res = [...map.values()]
    .filter((item) => item[2])
    .sort((a, b) => b[1] - a[1])[0];
  return res ? res[1] : -1;
};
// @lc code=end
