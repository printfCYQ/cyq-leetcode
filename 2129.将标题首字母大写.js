/*
 * @lc app=leetcode.cn id=2129 lang=javascript
 *
 * [2129] 将标题首字母大写
 */

// @lc code=start
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    return title.split(" ").map(item => {
        if (item.length < 3) {
            return item.toLowerCase()
        } else {
            return item.charAt(0).toUpperCase() + item.toLowerCase().slice(1)
        }
    }).join(" ")
};
const title = "First leTTeR of EACH Word"
console.log(capitalizeTitle(title));
// @lc code=end

