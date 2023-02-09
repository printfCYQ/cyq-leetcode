/*
 * @lc app=leetcode.cn id=1828 lang=javascript
 *
 * [1828] 统计一个圆中点的数目
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */

// dis = Math.sqrt( (x1-x2)**2 + (y1-y2)**2 )
var countPoints = function (points, queries) {
  const res = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < points.length; j++) {
      let x = (queries[i][0] - points[j][0]) ** 2;
      let y = (queries[i][1] - points[j][1]) ** 2;
      let dis = Math.sqrt(x + y);
      if (dis <= queries[i][2]) count++;
    }
    res.push(count);
  }
  return res;
};
// @lc code=end
