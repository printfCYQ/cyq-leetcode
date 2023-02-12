/*
 * @lc app=leetcode.cn id=1138 lang=javascript
 *
 * [1138] 字母板上的路径
 */

// @lc code=start
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  const map = new Map([
    ["a", [0, 0]],
    ["b", [0, 1]],
    ["c", [0, 2]],
    ["d", [0, 3]],
    ["e", [0, 4]],
    ["f", [1, 0]],
    ["g", [1, 1]],
    ["h", [1, 2]],
    ["i", [1, 3]],
    ["j", [1, 4]],
    ["k", [2, 0]],
    ["l", [2, 1]],
    ["m", [2, 2]],
    ["n", [2, 3]],
    ["o", [2, 4]],
    ["p", [3, 0]],
    ["q", [3, 1]],
    ["r", [3, 2]],
    ["s", [3, 3]],
    ["t", [3, 4]],
    ["u", [4, 0]],
    ["v", [4, 1]],
    ["w", [4, 2]],
    ["x", [4, 3]],
    ["y", [4, 4]],
    ["z", [5, 0]],
  ]);
  let local = [0, 0];
  let res = "";
  for (let i = 0; i < target.length; i++) {
    let current = map.get(target[i]);
    let x = current[1] - local[1];
    let y = current[0] - local[0];
    if (local[0] === 5) {
      res += writeY(y);
      res += writeX(x);
    } else {
      res += writeX(x);
      res += writeY(y);
    }
    res += "!";
    local = current;
  }
  return res;
};

function writeX(x) {
  let res = "";
  for (let j = 0; j < Math.abs(x); j++) {
    if (x > 0) {
      res += "R";
    } else {
      res += "L";
    }
  }
  return res;
}
function writeY(y) {
  let res = "";
  for (let j = 0; j < Math.abs(y); j++) {
    if (y > 0) {
      res += "D";
    } else {
      res += "U";
    }
  }
  return res;
}
const target = "zb";
console.log(alphabetBoardPath(target));
// @lc code=end
