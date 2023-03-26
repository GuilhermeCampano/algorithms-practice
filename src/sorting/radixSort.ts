function getDigit(number: number, i: number): number {
  return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
}

function digitCount(number: number): null | number {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(array: number[]): number {
  let maxDigits = 0;
  for (let i = 0; i < array.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(array[i]));
  }
  return maxDigits;
}

export function radixSort(array: number[]): number[] {
  const mostDigitNumber = mostDigits(array);
  for (let k = 0; k < mostDigitNumber; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      const key = getDigit(array[i], k);
      buckets[key].push(value);
    }
    array = buckets.flat();
  }
  return array;
}