/*
 * @lc app=leetcode.cn id=2413 lang=javascript
 *
 * [2413] 最小偶倍数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  let temp = n;
  while (1) {
    if (n % n === 0 && n % 2 === 0) {
      return n;
    }
    n = n + temp;
  }
};

// return n % 2 == 0 ? n : n * 2;

// @lc code=end
