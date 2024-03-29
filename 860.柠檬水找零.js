/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0,
        ten = 0;
    for (let bill of bills) {
        // 入账 5 元
        if (bill === 5) {
            five++;
        }
        // 入账 10 元
        else if (bill === 10) {
            if (five) {
                // 帐内有 5 元（可找零）
                five--;
                ten++;
            } else {
                return false;
            }
        }
        // 入账 20 元
        else {
            if (ten && five) {
                // 帐内有 10 元和 5 元（可找零）
                ten--;
                five--;
            } else if (five > 2) {
                // 帐内有2张以上 5 元（可找零）
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
// @lc code=end
