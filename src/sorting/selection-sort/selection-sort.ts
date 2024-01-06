import { swap } from '../../utils/swap/swap';

export function selectionSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    if (minimumIndex !== i) swap(array, i, minimumIndex);
  }
  return array;
}
