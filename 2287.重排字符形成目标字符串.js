/*
 * @lc app=leetcode.cn id=2287 lang=javascript
 *
 * [2287] 重排字符形成目标字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  const map = new Map();
  for (let item of s) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  const map2 = new Map();
  for (let item of target) {
    map2.set(item, (map2.get(item) || 0) + 1);
  }
  let counts = [];
  for (let key of map2.keys()) {
    if (!map.get(key)) return 0;
    counts.push(Math.floor(map.get(key) / map2.get(key)));
  }
  return Math.min(...counts);
};
// @lc code=end
