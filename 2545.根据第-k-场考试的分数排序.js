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
  const obj = {};
  for (let item of score) {
    obj[item[k]]
      ? (obj[item[k]] = [...obj[item[k]], item])
      : (obj[item[k]] = [item]);
  }
  return Object.values(obj).flat(1).reverse();
};
const score = [
    [10, 6, 9, 1],
    [7, 5, 11, 2],
    [4, 8, 3, 15],
  ],
  k = 2;
console.log(sortTheStudents(score, k));
// @lc code=end
