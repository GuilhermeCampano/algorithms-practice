import { swap } from "../utils/swap";

export function insertionSort(array) {
  for (var i = 1; i < array.length; i++) {
    const currentValue = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}

export function insertionSort2(array) {
  for (var i = 1; i < array.length; i++) {
    const currentValue = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j--) {
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
