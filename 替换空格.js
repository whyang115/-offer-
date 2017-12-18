function replaceSpace(str) {
  return str.replace(/^\s*|\s*$/g, "").replace(/\s/g, '20%')
}
console.log(replaceSpace(' we  are happy  '))