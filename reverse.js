/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let positive = (x > 0)
  x = Math.abs(x)
  if (x == 0) {
    return x
  }
  x = Number(String(x).split('').reverse().join(''))
  x = positive ? x : 0 - x
  if (x >= Math.pow(2,31) || x < -Math.pow(2,31)) {
    return 0
  }
  return x
};

reverse(312512)