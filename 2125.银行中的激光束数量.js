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
  let result = 0;
  let prev = 0; // 上一行个数
  let current = 0; // 当前行个数
  for (let i = 0; i < bank.length; i++) {
    let item = bank[i]; // 当前行
    current = 0;
    for (let j = 0; j < item.length; j++) {
      if (item[j] === "1") current++;
    }
    if (current === 0) continue; // 当前行没有，跳过
    if (prev > 0) {
      result += prev * current;
    }
    prev = current;
  }
  return result;
};
// @lc code=end
