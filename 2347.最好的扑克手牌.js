/*
 * @lc app=leetcode.cn id=2347 lang=javascript
 *
 * [2347] 最好的扑克手牌
 */

// @lc code=start
/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  if (new Set(suits).size === 1) return "Flush";
  const size = new Set(ranks).size;
  if (size < 5) {
    const map = new Map();
    for (let i = 0; i < ranks.length; i++) {
      map.set(ranks[i], (map.get(ranks[i]) || 0) + 1);
    }
    return [...map.values()].some((item) => item > 2)
      ? "Three of a Kind"
      : "Pair";
  }
  if (size === 5) {
    return "High Card";
  }
};
const ranks = [1, 1, 2, 2, 3],
  suits = ["d", "a", "a", "b", "c"];
console.log(bestHand(ranks, suits));
// @lc code=end
