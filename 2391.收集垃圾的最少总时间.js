/*
 * @lc app=leetcode.cn id=2391 lang=javascript
 *
 * [2391] 收集垃圾的最少总时间
 */

// @lc code=start
/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function (garbage, travel) {
  let res = 0;
  let hasG = false,
    hasM = false,
    hasP = false;

  // 从后向前
  // 按字母判断 车需要走到哪里
  for (let i = garbage.length - 1; i >= 0; i--) {
    let item = garbage[i];
    if (item.includes("M") && !hasM) {
      res += sum(travel, i);
      hasM = true;
    }
    if (item.includes("P") && !hasP) {
      res += sum(travel, i);
      hasP = true;
    }
    if (item.includes("G") && !hasG) {
      res += sum(travel, i);
      hasG = true;
    }
  }
  return res + garbage.join("").length; // 最后加上所有垃圾的处理时间
};

var sum = function (travel, index) {
  let count = 0;
  for (let i = 0; i < index; i++) {
    count += travel[i];
  }
  return count;
};

const garbage = ["MMM", "PGM", "GP"],
  travel = [3, 10];
console.log(garbageCollection(garbage, travel));
// @lc code=end
