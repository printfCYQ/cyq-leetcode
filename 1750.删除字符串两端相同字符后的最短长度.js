/*
 * @lc app=leetcode.cn id=1750 lang=javascript
 *
 * [1750] 删除字符串两端相同字符后的最短长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  let left = 0;
  let right = s.length - 1;
  let count = 0; //计数 --- 删掉了多少个字母
  // 最前和最后相等，进入循环
  while (left < right && s[left] === s[right]) {
    count += 2; // 最前和最后相等，计数两个
    // 计算左边一共有多少个相等的字母
    while (s[left + 1] === s[left] && left + 1 !== right) {
      count++;
      left++;
    }
    // 计算右边一共有多少个相等的字母
    while (s[right - 1] === s[right] && left + 1 !== right) {
      count++;
      right--;
    }
    left++;
    right--;
  }
  return s.length - count;
};
console.log(minimumLength("ca"));
// @lc code=end
