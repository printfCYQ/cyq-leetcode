/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    candies[i] = candies[i] + extraCandies >= max;
  }
  return candies;
};
const candies = [12, 1, 12],
  extraCandies = 10;
console.log(kidsWithCandies(candies, extraCandies));
// @lc code=end
