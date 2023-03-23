// divide and conquer
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
