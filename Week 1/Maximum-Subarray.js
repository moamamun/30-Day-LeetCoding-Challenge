//Q: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//Exmaple:
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums) {
    let ans = nums[0]
    for(let i = 1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
      ans = Math.max(ans, nums[i])
    }
    return ans
};