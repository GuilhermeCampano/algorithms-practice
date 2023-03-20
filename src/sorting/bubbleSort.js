import { swap } from "../utils/swap";

export function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

export function bubbleSortNearlySorted(array) {
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

// Time complexity: worst case O(n2), but it can be O(n) when nearly sorted
// Space Complexity O(N)

//LOG
// i = 4 | j = 0
// [1000, 3, 2, 1] -> [3, 1000,2,1]

// i = 4 | j = 1
// [3, 1000,2,1] -> [3, 2, 1000, 1]

// i = 4 | j = 2 (max)
// [3, 2, 1000, 1] -> [3, 2, 1, 1000]
// ------- ///

// i = 2 | j = 0
// [3, 2, 1, 1000] -> [2, 3, 1, 1000]

// i = 4 | j = 1
// [2, 3, 1, 1000] -> [2,1,3, 1000]
// ------- //

// i = 1 | j = 0
// [2,1,3, 1000] -> [1,2,3, 1000]
