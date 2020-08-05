/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
//给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

var minSubArrayLen = function(s, nums) {
  let minLength = nums.length + 1
  let sum = 0
  let arr = []
  for (let i in nums) {
    arr.push(nums[i])
    sum += nums[i]
    while(sum >= s) {
      sum -= arr[0]
      minLength = Math.min(minLength,arr.length)
      arr.shift()
    }
    // for (let j = i;j < nums.length;j++) {
    //   if ( j-i + 1 > minLength) break
    //   sum += nums[j]
    //   if (sum >= s) {
    //     minLength = minLength > j-i + 1 ? j-i + 1 : minLength 
    //     break
    //   }
    // }
  }
  return minLength == nums.length + 1 ? 0 : minLength
};
console.log(minSubArrayLen(7,[2,3,1,2,4,3]))
