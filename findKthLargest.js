/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 //在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

var findKthLargest = function(nums, k) {
  nums = nums.sort((a,b) => b - a)
  return nums[k - 1]
};
console.log(findKthLargest([3,2,1,5,6,4],2))
