/**
 * @method
 * @param {str} 输入字符串
 * @returns {index}} 序号
 * @desc 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中，
 * 找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.
 */
function FirstNotRepeatingChar (str) {
  return str.split('').findIndex(i => str.indexOf(i) === str.lastIndexOf(i))
}