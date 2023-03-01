/*
 * @lc app=leetcode.cn id=2373 lang=javascript
 *
 * [2373] 矩阵中的局部最大值
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  let len = grid.length;
  const res = [];
  for (let i = 1; i < len - 1; i++) {
    let temp = [];
    for (let j = 1; j < len - 1; j++) {
      temp.push(
        Math.max(
          grid[i - 1][j - 1],
          grid[i - 1][j],
          grid[i - 1][j + 1],
          grid[i][j - 1],
          grid[i][j],
          grid[i][j + 1],
          grid[i + 1][j - 1],
          grid[i + 1][j],
          grid[i + 1][j + 1]
        )
      );
    }
    res.push(temp);
  }
  return res;
};
const grid = [
  [9, 9, 8, 1],
  [5, 6, 2, 6],
  [8, 2, 6, 4],
  [6, 2, 2, 2],
];
console.log(largestLocal(grid));
// @lc code=end
