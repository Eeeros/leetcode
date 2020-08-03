/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows == 1) {
    return s
  }
  let rowList = Array()
  for (let i = 0;i < numRows ; i++) {
    rowList[i] = []
  }
  s = s.split('')
  let row = 0
  let add = true
  for (let i in s) {
    rowList[row].push(s[i])
    if (row == numRows - 1) {
      add = false
    } else if (row == 0) {
      add = true
    }
    add ? row++ : row-- 
  }
  let newString = ''
  for (let i in rowList) {
    newString += rowList[i].join('')
  }
  return newString
};
console.log(convert('ab',1))