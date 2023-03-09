/*
 * @lc app=leetcode.cn id=2482 lang=javascript
 *
 * [2482] 行和列中一和零的差值
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
  let newArr = [];
  let row = [];
  let col = [];
  for (let i = 0; i < grid[0].length; i++) {
    let temp = [];
    for (let j = 0; j < grid.length; j++) {
      temp.push(grid[j][i]);
    }
    newArr.push(temp);
  }
  for (let i = 0; i < grid.length; i++) {
    row.push([sum(grid[i]), -(grid[i].length - sum(grid[i]))]);
  }
  for (let i = 0; i < newArr.length; i++) {
    col.push([sum(newArr[i]), -(newArr[i].length - sum(newArr[i]))]);
  }
  const res = [];
  for (let i = 0; i < row.length; i++) {
    let temp = [];
    for (let j = 0; j < col.length; j++) {
      temp.push(sum([...row[i], ...col[j]]));
    }
    res.push(temp);
  }
  return res;
};
function sum(arr) {
  return arr.reduce((a, b) => a + b);
}
const grid = [
  [0, 1, 1],
  [1, 0, 1],
  [0, 0, 1],
];
console.log(onesMinusZeros(grid));
// @lc code=end
