/**
 * 数组的随机排序
 * @param {*} arr
 */
function shuffle(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let rand = Math.floor(Math.random() * len);
    let temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function shuffle(arr) {
  let res = [];
  while (arr.length > 0) {
    let randomIndex = parseInt(Math.floor(Math.random() * arr.length));
    res.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return res;
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
