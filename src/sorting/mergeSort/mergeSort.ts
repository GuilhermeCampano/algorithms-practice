export function merge(sortedArray1: number[], sortedArray2: number[]): number[] {
  const resultArray: number[] = [];
  let i = 0;
  let j = 0;
  while (resultArray.length < sortedArray1.length + sortedArray2.length) {
    if (j >= sortedArray2.length || sortedArray1[i] < sortedArray2[j]) {
      resultArray.push(sortedArray1[i]);
      i++;
    } else {
      resultArray.push(sortedArray2[j]);
      j++;
    }
  }

  return resultArray;
}

export function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array;
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}
