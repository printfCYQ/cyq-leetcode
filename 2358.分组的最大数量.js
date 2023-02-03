/*
 * @lc app=leetcode.cn id=2358 lang=javascript
 *
 * [2358] 分组的最大数量
 */

// @lc code=start
/**
 * @param {number[]} grades
 * @return {number}
 */
// 将数组从小到大排序后，任意后面i+1个数的合一定大于前面的i个数的合。判断最后分组的个数满不满足条件即可
var maximumGroups = function (grades) {
  let count = 0;
  let len = grades.length;

  // 剩余人数，还可以再分组，一直循环
  while (count <= len) {
    count++; // 每个分组的人数  从 1 - ？
    len -= count; // 剩余的人数
  }
  // 当剩余分组为负数时，证明最后一个分组不满足条件，将最后一个分组合并至倒数第二个分组，即所有分组数-1
  return len < 0 ? count - 1 : count;
};
// @lc code=end
