/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let a = 0; // 公牛
  let b = 0; // 奶牛
  const sMap = new Map();
  const gMap = new Map();
  for (let i = 0; i < secret.length; i++) {
    // 每个位置相等时直接记录公牛
    if (secret[i] === guess[i]) {
      a++;
    } else {
      sMap.set(secret[i], (sMap.get(secret[i]) || 0) + 1);
      gMap.set(guess[i], (gMap.get(guess[i]) || 0) + 1);
    }
  }

  // 只由数字组成，最多十个
  for (let i = 0; i < 10; i++) {
    let s = sMap.get(i + "") || 0; // 不存在的数字 记0
    let g = gMap.get(i + "") || 0;
    b += Math.min(s, g); // 哪个数字出现的次数少，这个数字一定可以转换成公牛数字。
  }
  return a + "A" + b + "B";
};
// @lc code=end
