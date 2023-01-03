/*
 * @lc app=leetcode.cn id=2042 lang=javascript
 *
 * [2042] 检查句子中的数字是否递增
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let arr = s.split(" ");
  let min = 0;
  for (let item of arr) {
    let current = Number(item);
    if (typeof current === "number" && !isNaN(current)) {
      if (current > min) {
        min = current;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
