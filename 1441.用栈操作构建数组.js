/*
 * @lc app=leetcode.cn id=1441 lang=javascript
 *
 * [1441] 用栈操作构建数组
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < target.length; j++) {
      if (target[j] === i) {
        res.push("Push");
        break;
      } else if (target[j] > i) {
        res.push("Push", "Pop");
        break;
      }
      if (target[j] === n) {
        return res;
      }
    }
  }
  return res;
};
const target = [2, 3, 4],
  n = 4;
console.log(buildArray(target, n));
// @lc code=end
