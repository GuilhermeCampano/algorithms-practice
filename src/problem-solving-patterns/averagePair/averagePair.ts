/** 
  Problem: Given a sorted array of integers and a target average, 
  determine if there is a pair of values in the array where the average of the pair equals the target average
  Problem Solving Patterns: Multiple Pointers
*/
export function averagePair(array: number[], averageExists: number): boolean {
  if(array.length <= 0) {
    return false;
  }
  let i = 0;
  let j = array.length -1;
  while (j > i) {
    const average = (array[i] + array[j]) / 2;
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