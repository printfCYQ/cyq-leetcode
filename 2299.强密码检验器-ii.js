/*
 * @lc app=leetcode.cn id=2299 lang=javascript
 *
 * [2299] 强密码检验器 II
 */

// @lc code=start
/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  let isUpperCase = false,
    isLowerCase = false,
    isHaveNum = false,
    isHaveSpecial = false;
  if (password.length < 8) return false;
  for (let i = 0; i < password.length; i++) {
    if (!isUpperCase) {
      if ("A" <= password[i] && password[i] <= "Z") {
        isUpperCase = true;
      }
    }
    if (!isLowerCase) {
      if ("a" <= password[i] && password[i] <= "z") {
        isLowerCase = true;
      }
    }
    if (!isHaveNum) {
      if (
        !isNaN(Number(password[i])) &&
        typeof Number(password[i]) === "number"
      ) {
        isHaveNum = true;
      }
    }
    if (!isHaveSpecial) {
      if ("!@#$%^&*()-+".includes(password[i])) {
        isHaveSpecial = true;
      }
    }

    if (password[i] === password[i + 1]) {
      return false;
    }
  }
  return isUpperCase && isLowerCase && isHaveNum && isHaveSpecial;
};
// @lc code=end
