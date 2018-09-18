/**
 * @method
 * @param {num1,num2} 整数一，整数二
 * @returns {sum} 两个整数的和
 * @desc 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。
 */

function Add (num1, num2) {
  const arr1 = Array.from({ length: Math.abs(num1) });
  const arr2 = Array.from({ length: Math.abs(num2) });
  const sign = `${num1}`.replace(/\d/, '') || `${num2}`.replace(/\d/, '');

  if (num1 >= 0 && num2 >= 0) {
    return arr1.concat(arr2).length
  } else if (num1 < 0 && num2 < 0) {
    let sumAbs = arr1.concat(arr2).length
    return Number(`${sign}${sumAbs}`)
  } else if (num1 === 0 || num2 === 0) {
    if (Math.abs(num1) > 0) {
      return `${num1}`.replace(/\d/, '') ? Number(`${sign}${arr1.length}`) : arr1.length
    } else {
      return `${num2}`.replace(/\d/, '') ? Number(`${sign}${arr2.length}`) : arr2.length
    }
  } else {
    let sum = 0;
    if (Math.abs(num1) > Math.abs(num2)) {
      if (`${num1}`.replace(/\d/, '')) {
        return Number(`${sign}${arr1.splice(0, Math.abs(num2)).length}`)
      } else {
        return arr1.splice(0, Math.abs(num2)).length
      }
    } else {
      if (`${num1}`.replace(/\d/, '')) {
        return arr1.splice(0, Math.abs(num2)).length

      } else {
        return Number(`${sign}${arr1.splice(0, Math.abs(num2)).length}`)
      }
    }
  }
}

Add(-1, 2)