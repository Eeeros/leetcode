/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  version1 = version1.split('.')
  version2 = version2.split('.')
  const length = Math.max(version1.length,version2.length)
  let i = 0
  while (i < length) {
    let v1 = parseInt(version1[i]) || 0
    let v2 = parseInt(version2[i]) || 0
    if (v1 != v2 ) {
      return v1 > v2 ? 1 : -1
    }
    i ++
  }
  return 0
};
console.log(compareVersion("0.1","1.1"))
console.log(compareVersion("7.5.2.4","7.5.3"))
console.log(compareVersion("1.01","1.001"))
console.log(compareVersion("1.1","1"))