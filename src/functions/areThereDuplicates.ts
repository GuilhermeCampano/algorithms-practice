// Find the duplicates in array of numbers 
export function areThereDuplicates(array: Array<number | string>): boolean {
  if(array.length <= 1) {
    return false;
  }
  let i = 0;
  for(let j = array.length - 1; j > i; j--) {
    if(array[i] === array[j]) {
      return true;
    }
    i++;
    if(array[i] === array[j]) {
      return true;
    }
  }
  return false;
}