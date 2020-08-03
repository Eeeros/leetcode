/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  s = s.split("")
  let length = getLength(s,[0])
  return Math.max(...length)
}
function getLength(list,length) {
  let a = {}
  let cutLength
  list.some((e,index) => {
    a[e] ? a[e].push(index) : a[e] = [index]
    if (a[e].length > 1) {
      cutLength = Math.min(...a[e])
      length.push(index)
      return true
    } else if (list.length == index + 1) {
      length.push(index + 1)
    }
  })
  if (list.length > cutLength) {
    list.splice(0,cutLength + 1)
    getLength(list,length)
  }
  return length
}
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("1"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("ggububgvfk"))
