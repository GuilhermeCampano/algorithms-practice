/** 
  * Given that I sorted the array, the averagePair function should return true
  * when the number passed is the average of a pair of values
  * and should return false if the passed thumber doesn't match any pair averagers 
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