/**
 * Problem: Given an array of integers and a number, find the minimum length of a contiguous subarray of which the sum is greater than or equal to the number passed to the function.
 * Problem Solving Patterns: Sliding Window
 */
export function minSubArrayLen(array: number[], sum: number): number {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < array.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < array.length) {
      total += array[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= array[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
