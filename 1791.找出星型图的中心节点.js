/*
 * @lc app=leetcode.cn id=1791 lang=javascript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  // 根据题意，中心节点必然出现在所有的 edges[i]
  // 用前两项就可以判断
  const a = edges[0][0];
  const b = edges[0][1];
  return edges[1][0] === a || edges[1][1] === a ? a : b;
};
const edges = [
  [1, 2],
  [2, 3],
  [4, 2],
];
console.log(findCenter(edges));
// @lc code=end
