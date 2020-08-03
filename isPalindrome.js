/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false
  else if (x < 10) return true
  let n = 10 ** Math.floor(Math.log10(x))
  while (x > 0) {
    if (Math.floor(x / n) !== x % 10) return false
    x = Math.floor((x % n) / 10)
    n = n / 100
  }
  return true
};
// 暴力
// var isPalindrome = function(x) {
//   const origin = x
//   if (x < 0) return false
//   else if (x == 0) return true
//   let newX = 0
//   while (x > 0) {
//     newX = newX * 10 + x % 10
//     x = Math.floor(x / 10)
//   }
//   console.log(newX == origin)
//   return newX == origin
// };
isPalindrome(1221)
