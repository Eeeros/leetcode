/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let number = parseInt(str)
  if (isNaN(number)) {
    number = 0
  }
  if (number)
  if (number >= Math.pow(2,31)) {
    number = Math.pow(2,31) - 1
  } else if (number < -Math.pow(2,31)) {
    number = -Math.pow(2,31)
  }
  console.log(number)
};
myAtoi('   -42')
myAtoi('4193 with words')
myAtoi(' with word 4193s')
myAtoi('-91283472332')