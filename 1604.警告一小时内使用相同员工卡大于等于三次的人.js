/*
 * @lc app=leetcode.cn id=1604 lang=javascript
 *
 * [1604] 警告一小时内使用相同员工卡大于等于三次的人
 */

// @lc code=start
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  const map = new Map();
  const res = [];
  for (let i = 0; i < keyName.length; i++) {
    map.set(keyName[i], [...(map.get(keyName[i]) || []), keyTime[i]]);
  }
  for (let item of map.keys()) {
    let timeArr = map.get(item).map((i) => {
      let time = i.split(":");
      return Number(time[0]) * 100 + Number(time[1]);
    });
    timeArr.sort((a, b) => a - b);
    for (let i = 0, j = i + 2; j < timeArr.length; i++, j++) {
      if (timeArr[j] - timeArr[i] <= 100) {
        res.push(item);
        break;
      }
    }
  }
  return res.sort()
};
// @lc code=end
