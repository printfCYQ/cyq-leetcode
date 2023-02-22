/*
 * @lc app=leetcode.cn id=1534 lang=javascript
 *
 * [1534] 统计好三元组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          count++;
        }
      }
    }
  }
  return count;
};
const arr = [3, 0, 1, 1, 9, 7],
  a = 7,
  b = 2,
  c = 3;
console.log(countGoodTriplets(arr, a, b, c));
// @lc code=end
