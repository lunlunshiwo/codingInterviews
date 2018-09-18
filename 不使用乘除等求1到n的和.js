/**
 * @method
 * @param {n} 数字n
 * @returns {sum} 1到n的和
 * @desc 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。
 */
function Sum_Solution (n) {
  let a = 1;
  let arr = Array.from({ length: n }, x => a++);
  return arr.reduce((a, b) => {
    return a + b
  }, 0)
}