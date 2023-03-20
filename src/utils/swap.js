export function swap(array, index1, index2) {
  const temporary = array[index1];
  array[index1] = array[index2];
  array[index2] = temporary;
}
