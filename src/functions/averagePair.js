export function averagePair(array, averageExists) {
  if (array.length <= 0) {
    return false;
  }
  let i = 0;
  let j = array.length - 1;
  while (j > i) {
    let average = (array[i] + array[j]) / 2;
    if (average < averageExists) {
      i++;
    } else if (average > averageExists) {
      j--;
    } else {
      return true;
    }
  }
  return false;
}
