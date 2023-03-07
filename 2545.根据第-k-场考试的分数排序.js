/*
 * @lc app=leetcode.cn id=2545 lang=javascript
 *
 * [2545] 根据第 K 场考试的分数排序
 */

// @lc code=start
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  return score.sort((a, b) => b[k] - a[k]);
};
const score = [
    [3, 4],
    [5, 6],
  ],
  k = 0;
console.log(sortTheStudents(score, k));
// @lc code=end
