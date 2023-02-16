/*
 * @lc app=leetcode.cn id=2125 lang=javascript
 *
 * [2125] 银行中的激光束数量
 */

// @lc code=start
/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let res = 0;
  for (let i = 0; i < bank.length; i++) {
    let isAllZero = bank[i].split("").every((item) => item === "0");
    if (isAllZero) {
      bank.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < bank.length - 1; i++) {
    let x = filterOne(bank[i]);
    let y = filterOne(bank[i + 1]);
    res += x.length * y.length;
  }
  return res;
};

var filterOne = function (str) {
  return str
    .split("")
    .filter((item) => item === "1")
    .join("");
};
// @lc code=end
