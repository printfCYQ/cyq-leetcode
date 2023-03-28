/*
 * @lc app=leetcode.cn id=1701 lang=javascript
 *
 * [1701] 平均等待时间
 */

// @lc code=start
/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let waitCount = customers[0][1]; // 累计等待时间
  let timeCount = customers[0][0] + customers[0][1]; // 当前时间点
  for (let i = 1; i < customers.length; i++) {
    //当前时间点大于，当前顾客到的时间点。顾客已经等待（等之前的顾客）
    if (timeCount > customers[i][0]) {
      // 当前顾客等待时间 = 等待之前顾客的时间 + 当前做餐时间
      waitCount += timeCount - customers[i][0] + customers[i][1];
      timeCount += customers[i][1]; // 更新时间点
    }
    //顾客只有做餐的等待时间
    else {
      waitCount += customers[i][1];
      timeCount = customers[i][0] + customers[i][1]; // 更新时间点
    }
  }
  return (waitCount / customers.length).toFixed(5);
};
const customers = [
  [1, 2],
  [2, 5],
  [4, 3],
];
console.log(averageWaitingTime(customers));
// @lc code=end
