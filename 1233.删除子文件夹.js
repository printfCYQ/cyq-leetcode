/*
 * @lc app=leetcode.cn id=1233 lang=javascript
 *
 * [1233] 删除子文件夹
 */

// @lc code=start
/**
 * @param {string[]} folder
 * @return {string[]}
 */
// var removeSubfolders = function (folder) {
//   folder.sort();
//   for (let i = 1; i < folder.length; i++) {
//     if (folder[i].indexOf(folder[i - 1] + "/") === 0) {
//       folder.splice(i, 1);
//       i--;
//     }
//   }
//   return folder;
// };

var removeSubfolders = function (folder) {
  const res = [];
  let temp ='//';
  folder.sort();
  for (let i = 0; i < folder.length; i++) {
    if (!folder[i].startsWith(temp)) {
      res.push(folder[i]);
      temp = folder[i] + "/";
    }
  }
  return res;
};
// @lc code=end
