/*
 * @lc app=leetcode.cn id=1630 lang=javascript
 *
 * [1630] 等差子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const res = [];
  for (let i = 0; i < l.length; i++) {
    const item = [];
    for (let j = l[i]; j <= r[i]; j++) {
      item.push(nums[j]);
    }
    item.sort((a, b) => a - b);
    const diff = item[1] - item[0];
    let flag = true;
    for (let k = 1; k < item.length; k++) {
      if (item[k] - item[k - 1] !== diff) {
        res.push(false);
        flag = false;
        break;
      }
    }
    flag && res.push(true);
  }
  return res;
};
const nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10],
  l = [0, 1, 6, 4, 8, 7],
  r = [4, 4, 9, 7, 9, 10];
console.log(checkArithmeticSubarrays(nums, l, r));
// @lc code=end
