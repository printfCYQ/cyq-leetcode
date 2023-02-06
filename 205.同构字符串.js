/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapS = new Map();
  const mapT = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!mapS.has(s[i])) {
      mapS.set(s[i], t[i]);
    }
    if (!mapT.has(t[i])) {
      mapT.set(t[i], s[i]);
    }
  }
  let convertS = "";
  let convertT = "";
  for (let i = 0; i < s.length; i++) {
    convertS += mapS.get(s[i]);
    convertT += mapT.get(t[i]);
  }
  return convertS === t && convertT === s;
};

// 妙
// var isIsomorphic = function (s, t) {
//   for (let i = 0; i < s.length; i++)
//     if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false;
//   return true;
// };
// @lc code=end
