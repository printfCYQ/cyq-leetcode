/*
 * @lc app=leetcode.cn id=2418 lang=javascript
 *
 * [2418] 按身高排序
 */

// @lc code=start
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  heights = heights.map((item, index) => [item, index]);
  heights.sort((a, b) => b[0] - a[0]);
  const res = [];
  heights.forEach((item) => {
    res.push(names[item[1]]);
  });
  return res;
};
// @lc code=end
