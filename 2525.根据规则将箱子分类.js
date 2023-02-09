/*
 * @lc app=leetcode.cn id=2525 lang=javascript
 *
 * [2525] 根据规则将箱子分类
 */

// @lc code=start
/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
  let isBulky =
    length >= 10 ** 4 ||
    width >= 10 ** 4 ||
    height >= 10 ** 4 ||
    length * width * height >= 10 ** 9;
  let isHeavy = mass >= 100;

  if (isBulky && isHeavy) return "Both";
  else if (!isBulky && !isHeavy) return "Neither";
  else if (isBulky && !isHeavy) return "Bulky";
  else return "Heavy";
};
// @lc code=end
