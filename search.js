/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0 || (nums.length === 1 && nums[0] != target)) { return -1 }
  if (nums[0] > target) { return -1 }
  if (nums[nums.length - 1] < target) { return -1 }
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((right + left) / 2)
    if (nums[mid] == target) {
      return mid
    }
    nums[mid] > target ? right = --mid : left = ++mid
  }
  return -1
};
// console.log(search([-1,0,3,5,9,12],9))
console.log(search([-1,0,3,5,9,12],2))
