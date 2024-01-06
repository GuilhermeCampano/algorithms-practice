/**
 * Given an array of integers  and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/
export function twoSum(array: number[], target:number): number[] {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    const hash = target - array[i];
    if (map.has(hash)) {
      return [map.get(hash), i];
    }
    map.set(array[i], i);
  }
  return [];
}