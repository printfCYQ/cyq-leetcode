/*
 * @lc app=leetcode.cn id=1689 lang=javascript
 *
 * [1689] 十-二进制数的最少数目
 */

// @lc code=start
/**
 * @param {string} n
 * @return {number}
 */
// var minPartitions = function(n) {
//     return Math.max(...n.split(''))
// };

var minPartitions = function (n) {
  for (let i = 9; i > 0; i--) {
    if (n.includes(i)) return i;
  }
  return 0;
};

// @lc code=end
