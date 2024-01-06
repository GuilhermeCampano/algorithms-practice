
/**
 * Problem: Given a sorted array of integers, write a function that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
 * Problem Solving Patterns: Divide and Conquer
 */
export function searchDivideConquer(array: number[], target: number): number {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const middleValue = array[middle];

    if (middleValue < target) {
      min = middle + 1;
    } else if (middleValue > target) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
