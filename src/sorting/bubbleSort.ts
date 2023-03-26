import { swap } from '../utils/swap';

/**
 * Bubble Sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order;
 * Time Complexity: O(N^2)  but it can be O(n) when nearly sorted
 * Space Complexity: O(1)
*/
export function bubbleSort(array: number[]): number[] {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

export function bubbleSortNearlySorted(array: number[]): number[] {
  for (let i = array.length; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}



