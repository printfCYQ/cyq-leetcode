/*
 * @lc app=leetcode.cn id=807 lang=javascript
 *
 * [807] 保持城市天际线
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  const newGrid = [];
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    const temp = [];
    for (let j = 0; j < grid.length; j++) {
      temp.push(grid[j][i]);
    }
    newGrid.push(temp);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      let num = Math.min(Math.max(...grid[i]), Math.max(...newGrid[j]));
      res += num - grid[i][j];
    }
  }
  return res;
};
const grid = [
  [3, 0, 8, 4],
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0],
];
console.log(maxIncreaseKeepingSkyline(grid));
// @lc code=end
