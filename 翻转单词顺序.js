/**
 * @method
 * @param {str} 输入的倒叙的字符串
 * @returns {str}} 反转之后的字符串
 * @desc 牛客最近来了一个新员工Fish，每天早晨总是会拿着一本英文杂志，写些句子在本子上。
 * 同事Cat对Fish写的内容颇感兴趣，有一天他向Fish借来翻看，但却读不懂它的意思。
 * 例如，“student. a am I”。
 * 后来才意识到，这家伙原来把句子单词的顺序翻转了，正确的句子应该是“I am a student.”。
 * Cat对一一的翻转这些单词顺序可不在行，你能帮助他么？
 */
function ReverseSentence1 (str) {
  return str.split(" ").reverse().join(" ");
}

function ReverseSentence2 (str) {
  const arrCopyStr = str.split(' ');
  const len = arrCopyStr.length;
  let arr = Array.from({ length: len }, (i, index) => arrCopyStr[len - index - 1])
  return arr.join(' ')
}