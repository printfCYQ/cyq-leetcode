/*
 * @lc app=leetcode.cn id=2428 lang=javascript
 *
 * [2428] 沙漏的最大总和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  let res = 0;
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      let temp =
        grid[i - 1][j - 1] +
        grid[i - 1][j] +
        grid[i - 1][j + 1] +
        grid[i][j] +
        grid[i + 1][j - 1] +
        grid[i + 1][j] +
        grid[i + 1][j + 1];
      res = Math.max(res, temp);
    }
  }
  return res;
};
const grid = [
  [6, 2, 1, 3],
  [4, 2, 1, 5],
  [9, 2, 8, 7],
  [4, 1, 2, 9],
];
console.log(maxSum(grid));
// @lc code=end
