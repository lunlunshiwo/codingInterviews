/**
 * @method
 * @param {str} 字符串str
 * @returns {str} 替换过空格的字符串
 * @desc 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */
function replaceSpace (str) {
  return str.replace(/\s/g, '%20')
}