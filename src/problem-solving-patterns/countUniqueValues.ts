/**
 * Problem: Count the unique values in array of numbers
 * Problem Solving Patterns: Multiple Pointers
 */
export function countUniqueValues(array: Array<number | string>): number {
  if (array.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};
