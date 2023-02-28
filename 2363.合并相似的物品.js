/*
 * @lc app=leetcode.cn id=2363 lang=javascript
 *
 * [2363] 合并相似的物品
 */

// @lc code=start
/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const map = new Map();
  for (let i = 0; i < items1.length; i++) {
    map.set(items1[i][0], (map.get(items1[i][0]) || 0) + items1[i][1]);
  }
  for (let i = 0; i < items2.length; i++) {
    map.set(items2[i][0], (map.get(items2[i][0]) || 0) + items2[i][1]);
  }
  return [...map.entries()].sort((a, b) => a[0] - b[0]);
};
const items1 = [
    [1, 3],
    [2, 2],
  ],
  items2 = [
    [7, 1],
    [2, 2],
    [1, 4],
  ];
console.log(mergeSimilarItems(items1, items2));
// @lc code=end
