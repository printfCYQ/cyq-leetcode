/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let str = "";
  let temp = 0;
  for (let i = 0; i < s.length; i++) {
    str += s[i].charCodeAt() - 96;
  }
  while (k > 0) {
    for (let i = 0; i < str.length; i++) {
      temp += Number(str[i]);
    }
    str = temp + "";
    temp = 0;
    k--;
  }
  return Number(str);
};

const s = "iiii",
  k = 1;
console.log(getLucky(s, k));
// @lc code=end
