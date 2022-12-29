/*
 * @lc app=leetcode.cn id=2485 lang=javascript
 *
 * [2485] 找出中枢整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  for (let i = 1; i <= n; i++) {
    let left = add(0, i);
    let right = add(i, n);
    console.log(left, right);
    if (left > right) {
      break;
    }
    if (left === right) {
      return i;
    }
  }
  return -1;
};

var add = (start, end) => {
  let res = 0;
  for (let i = start; i <= end; i++) {
    res += i;
  }
  return res;
};

// @lc code=end
