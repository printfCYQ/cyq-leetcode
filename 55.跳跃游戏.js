/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 从后往前看
// 要想到达最后一个，最少能到倒数第二个
// 要想到达倒数第二一个，最少能到倒数第三个
// ......
// 当遇见0时，要跳过0，所以上一步的步长最少要+1
var canJump = function (nums) {
  let step = 1; // 记录需要的步长

  // 循环从倒数第二位开始
  for (let i = nums.length - 2; i >= 0; i--) {
    // 所需步长大于1时，证明之前的循环遇见0了
    if (step > 1) {
      // 当 当前值大于等于所需要的步长 重置所需步长step
      if (nums[i] >= step) {
        step = 1;
      }
      //如果 当前值 小于所需步长，那下一步需要的步长+1
      else {
        step++;
      }
    }
    // 所需步长等于1 证明之前的位置都是可以达到
    else {
      // 当遇见0时，所需步长+1
      if (nums[i] === 0) {
        step++;
      }
    }
  }
  return step === 1; // 最后判断所需步长是否为1
};
// @lc code=end
