/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = []; // 栈
  const res = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    // 当栈内有元素时 && 当前温度是否大于栈顶元素，【更新结果数组，栈顶元素出栈】
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      res[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }
    stack.push(i); // 将当前元素入栈
  }
  return res;
};
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
// @lc code=end
