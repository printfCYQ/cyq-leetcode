/*
 * @lc app=leetcode.cn id=2490 lang=javascript
 *
 * [2490] 回环句
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][arr[i].length - 1] !== arr[i + 1][0]) {
      return false;
    }
  }
  return arr[0][0] === arr[arr.length - 1][arr[arr.length - 1].length - 1];
};
// @lc code=end
