/*
 * @lc app=leetcode.cn id=1637 lang=javascript
 *
 * [1637] 两点之间不包含任何点的最宽垂直面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
// 根据题意，x轴相邻两点的最大距离即为结果
var maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]); // 根据x轴排序
  let res = 0;
  for (let i = 1; i < points.length; i++) {
    // 依次计算两点之间的距离
    res = Math.max(res, points[i][0] - points[i - 1][0]);
  }
  return res;
};
const points = [
  [3, 1],
  [9, 0],
  [1, 0],
  [1, 4],
  [5, 3],
  [8, 8],
];
console.log(maxWidthOfVerticalArea(points));
// @lc code=end
