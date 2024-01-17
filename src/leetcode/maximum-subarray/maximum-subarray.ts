/**
 * 53. Maximum Subarray
 * URL: https://leetcode.com/problems/maximum-subarray/
 * Problem: Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * 
 * Solution: Sliding Window

 * Time complexity: O(n)
 */
export function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for(let i = 1; i < nums.length; i++) {
    const currentNumber = nums[i];
    currentSum = Math.max(currentNumber, currentSum + currentNumber);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

/**
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * 
 * currentSum = -2; maxSum = -2
 * 
 * i = 1; currentNumber = 1; currentSum = 1; maxSum = 1;
 * i = 2; currentNumber = -3; currentSum = -2; maxSum = 1;
 * i = 3; currentNumber = 4; currentSum = 4; maxSum = 4;
 * i = 4; currentNumber = -1; currentSum = 3; maxSum = 4;
 * i = 5; currentNumber = 2; currentSum = 5; maxSum = 5;
 * i = 6; currentNumber = 1; currentSum = 6; maxSum = 6; <!-- FOUND IT
 * i = 7; currentNumber = -5; currentSum = 1; maxSum = 6;
 * i = 8; currentNumber = 4; currentSum = 5; maxSum = 6;
 * 
 * Output: 6
 */