/*
 * @lc app=leetcode.cn id=2379 lang=javascript
 *
 * [2379] 得到 K 个黑块的最少涂色次数
 */

// @lc code=start
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let res = k;
  for (let i = 0; i < blocks.length - k + 1; i++) {
    let temp = 0;
    for (let j = i; j < i + k; j++) {
      if (blocks[j] === "W") {
        temp++;
      }
    }
    res = Math.min(res, temp);
  }
  return res;
};
const blocks = "BWWWBB",
  k = 6;
console.log(minimumRecolors(blocks, k));
// @lc code=end
