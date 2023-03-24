/**
 * It must be a sorted array;
 * Time complexity O(log n) 16 elements take 4 steps and 32 elements 5 steps
 * Space Complexity O(1)
 */
export function binarySearch(array: number[], value: number) {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) {
    const middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    const middleValue = array[middlePointer];

    if (middleValue < value) {
      leftPointer = middlePointer + 1;
    } else if (middleValue > value) {
      rightPointer = middlePointer - 1;
    } else {
      return middlePointer;
    }
  }
  return -1;
}
