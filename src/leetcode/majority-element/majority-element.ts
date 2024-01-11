/**
 * [169. Majority Element](https://leetcode.com/problems/majority-element/description/)
 *
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 *
 * Solution: Frequency Counter
 * Time complexity: O(n), where n is the length of nums.
 * The algorithm stops iterating when the frequency of a number is greater than half of the length of the list.
 */

export function majorityElement(nums: number[]): number {
  if (nums.length <= 2) return nums[0];

  const numbersFrequency: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const frequencyValue = numbersFrequency.get(currentNumber) || 0;
    const newFrequencyValue = frequencyValue + 1;
    if (newFrequencyValue > Math.floor(nums.length / 2)) {
      return currentNumber;
    }
    numbersFrequency.set(currentNumber, newFrequencyValue);
  }

  return -1; // Not found
}