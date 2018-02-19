/**
 * 第一个只出现一次的字符
 * 用一个对象保存所有字符出现的个数
 * 遍历对象 找出的一个个数为1的值
 * @param {*} str
 */
function firstNotRepeatChar(str) {
  if (str.length <= 0) return -1;
  let res = {};
  for (let i = 0; i < str.length; i++) {
    if (res[str[i]]) {
      res[str[i]]++;
    } else {
      res[str[i]] = 1;
    }
  }
  for (let key in res) {
    if (res[key] === 1) return str.indexOf(key);
  }
}
console.log(firstNotRepeatChar("google"));
