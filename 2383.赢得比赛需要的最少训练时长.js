/*
 * @lc app=leetcode.cn id=2383 lang=javascript
 *
 * [2383] 赢得比赛需要的最少训练时长
 */

// @lc code=start
/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
  let hour = 0; // 最后一共需要的时长
  let energyCount = 0; // 所需精力值
  for (let i = 0; i < energy.length; i++) {
    energyCount += energy[i];
  }

  // 比较初始化精力值和所需精力值
  if (energyCount >= initialEnergy) {
    hour = energyCount - initialEnergy + 1;
  }

  // 经验值
  for (let i = 0; i < experience.length; i++) {
    if (initialExperience <= experience[i]) {
      hour = hour + experience[i] - initialExperience + 1;
      initialExperience += experience[i] - initialExperience + 1;
    }
    initialExperience += experience[i];
  }
  return hour;
};

// @lc code=end
