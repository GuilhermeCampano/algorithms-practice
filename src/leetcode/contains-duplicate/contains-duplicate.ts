/*
* 217. Contains Duplicate
* URL: https://leetcode.com/problems/contains-duplicate/
* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*
* Time complexity: O(n)
*/
export function containsDuplicate(nums: number[]): boolean {
  if (nums.length <= 1) return false;
  
  const frequencyMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (frequencyMap.has(currentNumber)) {
      return true;
    }
    frequencyMap.set(currentNumber, 1);
  }
  return false;
}


/*
* Solution 2: Set
* Set is a data structure that only stores unique values.
* Time complexity: O(n)
*/
export function containsDuplicate2(nums: number[]): boolean {
  const numSet = new Set(nums);
  return numSet.size !== nums.length;
}