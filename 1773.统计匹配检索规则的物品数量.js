/*
 * @lc app=leetcode.cn id=1773 lang=javascript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let keys = ["type", "color", "name"];
  let index = keys.indexOf(ruleKey);
  let count = 0;
  for (let item of items) {
    if (item[index] === ruleValue) count++;
  }
  return count;
};
// @lc code=end
