import { swap } from '../utils/swap';

export function pivotHelper(array, start = 0) {
  const pivot = array[start];
  let swapIndex = start;
  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, swapIndex, start);
  return swapIndex;
}

export function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = pivotHelper(array, left);
    //left
    quickSort(array, left, pivotIndex - 1);
    //right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}
