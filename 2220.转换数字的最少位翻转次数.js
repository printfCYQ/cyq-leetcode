/*
 * @lc app=leetcode.cn id=2220 lang=javascript
 *
 * [2220] 转换数字的最少位翻转次数
 */

// @lc code=start
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let a = start.toString(2);
  let b = goal.toString(2);
  if (a.length - b.length > 0) {
    b = b.padStart(a.length, "0");
  } else {
    a = a.padStart(b.length, "0");
  }
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] ^ b[i]) count++; // 相同为0，不同为1
  }
  return count;
};
const start = 10,
  goal = 7;
console.log(minBitFlips(start, goal));
// @lc code=end
