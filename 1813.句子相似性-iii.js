/*
 * @lc app=leetcode.cn id=1813 lang=javascript
 *
 * [1813] 句子相似性 III
 */

// @lc code=start
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  const arr1 = sentence1.split(" ");
  const arr2 = sentence2.split(" ");
  const len1 = arr1.length;
  const len2 = arr2.length;
  let i = 0,
    j = 0;

  // 从前向后判断
  while (i < len1 && i < len2 && arr1[i] === arr2[i]) {
    i++;
  }

  // 从后向前判断
  while (
    j < len1 - i &&
    j < len2 - i &&
    arr1[len1 - j - 1] === arr2[len2 - j - 1]
  ) {
    j++;
  }
  return i + j === Math.min(len1, len2); // 等于短的那个长度符合题目
};
// @lc code=end
