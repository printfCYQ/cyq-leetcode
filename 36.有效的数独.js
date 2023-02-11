/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let arr0 = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  let arr5 = [];
  let arr6 = [];
  let arr7 = [];
  let arr8 = [];
  for (let i = 0; i < 9; i++) {
    if (valid(board[i])) return false;
    let col = [];
    for (let j = 0; j < 9; j++) {
      if (i < 3) {
        if (j < 3) {
          arr0.push(board[i][j]);
        } else if (j < 6 && j >= 3) {
          arr1.push(board[i][j]);
        } else if (j < 9 && j >= 6) {
          arr2.push(board[i][j]);
        }
      } else if (i >= 3 && i < 6) {
        if (j < 3) {
          arr3.push(board[i][j]);
        } else if (j < 6 && j >= 3) {
          arr4.push(board[i][j]);
        } else if (j < 9 && j >= 6) {
          arr5.push(board[i][j]);
        }
      } else if (i >= 6 && i < 9) {
        if (j < 3) {
          arr6.push(board[i][j]);
        } else if (j < 6 && j >= 3) {
          arr7.push(board[i][j]);
        } else if (j < 9 && j >= 6) {
          arr8.push(board[i][j]);
        }
      }
      col.push(board[j][i]);
    }
    if (valid(col)) return false;
  }
  if (valid(arr0)) return false;
  if (valid(arr1)) return false;
  if (valid(arr2)) return false;
  if (valid(arr3)) return false;
  if (valid(arr4)) return false;
  if (valid(arr5)) return false;
  if (valid(arr6)) return false;
  if (valid(arr7)) return false;
  if (valid(arr8)) return false;
  return true;
};

const valid = (arr) => {
  let temp = arr.filter((i) => i !== ".");
  return temp.length !== [...new Set(temp)].length;
};
// @lc code=end
