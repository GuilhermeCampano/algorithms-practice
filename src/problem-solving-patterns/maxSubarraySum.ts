
/**
 * Problem: Given an array of integers and a number, find the maximum sum of a subarray with the length of the number passed to the function.
 * Problem Solving Patterns: Sliding Window
 */
export function maxSubarraySum(array: number[], target: number): number | null {
  if (array.length < target) return null;

  let total = 0;
  for (let i = 0; i < target; i++) {
    total += array[i];
  }
  let currentTotal = total;
  for (let i = target; i < array.length; i++) {
    const j = i - target;
    currentTotal += array[i] - array[j];
    total = Math.max(total, currentTotal);
  }
  return total;
}
