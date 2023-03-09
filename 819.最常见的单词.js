/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const reg = /(!)|(\?)|(')|(,)|(;)|(\.)/g;
  paragraph = paragraph.replace(reg, " ");
  const map = new Map();
  paragraph.split(" ").map((item) => {
    let temp = item.trim().toLowerCase();
    if (!banned.includes(temp) && temp !== "") {
      map.set(temp, (map.get(temp) || 0) + 1);
    }
  });
  return [...map.entries()].sort((a, b) => b[1] - a[1])[0][0];
};
const paragraph = "a, a, a, a, b,b,b,c, c";
banned = ["a"];
console.log(mostCommonWord(paragraph, banned));
// @lc code=end
