import { swap } from '../../utils/swap/swap';

/**
 * Insertion Sort splits an arary into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
 * Time Complexity: O(N^2)  but it can be O(n) when nearly sorted
 * Space Complexity: O(1)
*/
export function insertionSort(array: number[]): number[] {
  let i: number;
  let j: number;

  for (i = 1; i < array.length; i++) {
    const currentValue = array[i];
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}

export function insertionSort2(array: number[]): number[] {
  let i: number;
  let j: number;

  for (i = 1; i < array.length; i++) {
    const currentValue = array[i];
    for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      swap(array, j + 1, j);
    }
  }
  return array;
}

/*
array: 3,1,15,5 
i: 1 | value: 1 
j: 0 | array: 3,3,15,5 
array: 1,3,15,5 
i: 2 | value: 15 
array: 1,3,15,5 
i: 3 | value: 5 
j: 2 | array: 1,3,15,15 
array: 1,3,5,15 
*/
