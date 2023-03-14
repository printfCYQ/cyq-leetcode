/*
 * @lc app=leetcode.cn id=1742 lang=javascript
 *
 * [1742] 盒子中小球的最大数量
 */

// @lc code=start
/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const map = new Map();
  for (let i = lowLimit; i <= highLimit; i++) {
    let temp = getNum(i);
    map.set(temp, (map.get(temp) || 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1])[0][1];
};
var getNum = function (num) {
  let res = 0;
  while (num) {
    res += num % 10;
    num = Math.floor(num / 10);
  }
  return res;
};
const lowLimit = 11,
  highLimit = 104;
console.log(countBalls(lowLimit, highLimit));
// @lc code=end
