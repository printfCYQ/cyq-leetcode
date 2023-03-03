/*
 * @lc app=leetcode.cn id=1487 lang=javascript
 *
 * [1487] 保证文件名唯一
 */

// @lc code=start
/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  const map = new Map();
  const res = [];
  for (let name of names) {
    // map中存在
    if (map.has(name)) {
      let num = map.get(name); // 存在了几个
      // (?) 一直+1 直到找到map中不存在为止
      while (true) {
        if (map.has(`${name}(${num})`)) num++;
        else break;
      }
      res.push(`${name}(${num})`);
      map.set(name, num);
      map.set(`${name}(${num})`, 1);
    }
    // map中不存在 计数1 直接加入结果数组
    else {
      map.set(name, 1);
      res.push(name);
    }
  }
  return res;
};
const names = ["kaido", "kaido(1)", "kaido", "kaido(1)"];
console.log(getFolderNames(names));
// @lc code=end
