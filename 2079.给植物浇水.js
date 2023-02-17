/*
 * @lc app=leetcode.cn id=2079 lang=javascript
 *
 * [2079] 给植物浇水
 */

// @lc code=start
/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let i = 0;
  let total = capacity;
  let count = 0;
  while (i < plants.length) {
    if (total >= plants[i]) {
      total -= plants[i];
      count++;
      i++;
    } else {
      count += 2 * i;
      total = capacity;
    }
  }
  return count;
};
const plants = [7, 7, 7, 7, 7, 7, 7],
  capacity = 8;
console.log(wateringPlants(plants, capacity));
// @lc code=end
