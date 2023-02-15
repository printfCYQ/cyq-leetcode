/*
 * @lc app=leetcode.cn id=1281 lang=javascript
 *
 * [1281] 整数的各位积和之差
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let arr = n.toString().split("");
  return mul(arr) - sum(arr);
};

var sum = (arr) => {
  return arr.reduce((pre, item) => {
    return pre + Number(item);
  }, 0);
};
const mul = (arr) => {
  return arr.reduce((pre, item) => {
    return pre * Number(item);
  }, 1);
};
console.log(subtractProductAndSum(234));
// @lc code=end
