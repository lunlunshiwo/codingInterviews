/**
 * @method
 * @param {array,sum} 数组,整数
 * @returns {arr}} 数组
 * @desc 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S.
 * 如果有多对数字的和等于S，输出两个数的乘积最小的。
 */
function FindNumbersWithSum (array, sum) {
  let arr = array.filter(i => array.findIndex(j => sum - i === j) > -1).sort((a, b) => a - b)
  return arr.length === 0 ? [] : [arr[0], arr[arr.length - 1]]
}