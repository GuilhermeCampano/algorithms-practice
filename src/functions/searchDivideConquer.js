// divide and conquer
export function searchDivideConquer(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let middleValue = array[middle];

    if (middleValue < val) {
      min = middle + 1;
    } else if (middleValue > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
