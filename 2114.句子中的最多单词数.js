/*
 * @lc app=leetcode.cn id=2114 lang=javascript
 *
 * [2114] 句子中的最多单词数
 */

// @lc code=start
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  return Math.max(...sentences.map((item) => item.split(" ").length));
};
const sentences = [
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
];
console.log(mostWordsFound(sentences));
// @lc code=end
