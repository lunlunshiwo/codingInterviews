/**
 * @method
 * @param {target, array} 整数，数组
 * @returns {bool}} 是或者否
 * @desc 在一个二维数组中（每个一维数组的长度相同)
 * 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

function Find (target, array) {
  let arr = array.filter(list => list[list.length - 1] + 1 > target && target > list[0] - 1);
  const index = arr.concat().findIndex((list) => {
    return list.some(item => item === target)
  })
  return index === -1 ? false : true
}


// Find(7, [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]])
// 更好的方案，但是貌似二分法写的有问题
// function Find (target, array) {
//   let arr = array.filter(list => list[list.length - 1] + 1 > target && target > list[0] - 1);
//   const index = arr.concat().findIndex((list) => {
//     return two(target, list.concat())
//   })
//   function two (val, arr) {
//     let res = [];
//     let base = Math.floor(arr.length / 2);
//     if (arr.length < 1 || val < arr[0] || val > arr[arr.length - 1]) {
//       return false
//     } else if (val === arr[0] || val === arr[arr.length - 1]) {
//       return true
//     } else if (arr.length == 1) {
//       return false
//     } else {
//       if (val > arr[base]) {
//         res = arr.splice(base + 1, arr.length - 1);
//       } else if (val == arr[base]) {
//         return true
//       } else {
//         res = arr.splice(0, base);
//       }
//       two(val, res);
//     }
//   }
//   return index === -1 ? false : true
// }
// Find(7, [[1, 2, 8, 9], [2, 4, 9, 12], [4, 7, 10, 13], [6, 8, 11, 15]])