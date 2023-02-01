/*
 * @lc app=leetcode.cn id=2325 lang=javascript
 *
 * [2325] 解密消息
 */

// @lc code=start
/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let start = 97;
  const map = new Map([[" ", " "]]);
  for (let i = 0; i < key.length; i++) {
    if (!map.has(key[i])) {
      map.set(key[i], String.fromCharCode(start));
      start++;
    }
  }
  let res = "";
  for (let i = 0; i < message.length; i++) {
    res += map.get(message[i]);
  }
  return res;
};
// @lc code=end
