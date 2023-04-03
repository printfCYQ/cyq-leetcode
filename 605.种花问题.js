/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 在 flowerbed 数组两端各增加一个 0，不用考虑边界条件，任意位置处只要连续出现三个 0 就可以栽上一棵花。
var canPlaceFlowers = function (flowerbed, n) {
  if (!n) return true;
  flowerbed.push(0);
  flowerbed.unshift(0);
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      flowerbed[i] = 1; // 此处插花
      n--; // 花 -1
    }
    if (!n) break; // n为0时，直接退出循环
  }
  return !n;
};
// @lc code=end
