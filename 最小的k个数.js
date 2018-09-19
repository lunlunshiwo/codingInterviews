/**
 * @method
 * @param {input,k} 输入的数组，个数k
 * @returns {arr}} k个最小的数
 * @desc 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，
 * 则最小的4个数字是1,2,3,4,。
 */

function GetLeastNumbers_Solution (input, k) {
  let arr = input.sort((a, b) => a - b);
  return arr.length >= k ? arr.splice(0, k) : []
}