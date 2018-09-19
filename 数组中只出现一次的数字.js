/**
 * @method
 * @param {arr} 输入数组
 * @returns {arrRes} 输出 
 * @desc 一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。
 * 请写程序找出这两个只出现一次的数字。
 */
function FindNumsAppearOnce (array) {
  return array.filter(i => array.indexOf(i) === array.lastIndexOf(i))
}