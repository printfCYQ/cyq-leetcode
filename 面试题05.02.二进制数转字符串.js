/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  let set = new Set([num]);
  let res = "0.";
  while (true) {
    let temp = num * 2;
    if (temp > 1) {
      num = (temp - 1).toFixed(6);
      if (set.has(num)) {
        return "ERROR";
      }
      set.add(num);
      res += "1";
    } else if (temp < 1) {
      num = temp.toFixed(6);
      set.add(num);
      res += "0";
    } else {
      res += "1";
      break;
    }
  }
  return res;
};
const num = 0.25;

console.log(printBin(num));
