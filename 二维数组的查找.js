function dichotomy(arr, target) {
  let len = arr.length;
  let ind = Math.floor(len / 2);
  if (len === 1 && arr[ind] !== target) return "can't find";
  if (arr[ind] === target) {
    return true;
  }
  if (arr[ind] < target) {
    return dichotomy(arr.slice(ind), target);
  }
  if (arr[ind] > target) {
    return dichotomy(arr.slice(0, ind), target);
  }
}

console.log(dichotomy([1, 2, 3], 3));
const assert = require("assert");
function find(target, arr) {
  for (var i = 0; i < arr.length; i++) {
    var len = arr[i].length;
    if (arr[i][0] <= target && arr[i][len - 1] >= target)
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === target) return true;
      }
  }
  return false;
}

var arr = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]];
assert(find(4, arr), "not find item");
