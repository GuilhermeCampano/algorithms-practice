export function getDigit(number, i) {
  return Math.floor(Math.abs(number) / Math.pow(10, i)) % 10;
}

export function digitCount(number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

export function mostDigits(array) {
  let maxDigits = 0;
  for (let i = 0; i < array.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(array[i]));
  }
  return maxDigits;
}

export function radixSort(array) {
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

/*
LOG

k [10, 15, 5, 315, 420, 3, 1020, 50]
0 [10, 420, 1020, 50, 3, 15, 5, 315]
1 [3, 5, 10, 15, 315, 420, 1020, 50]
2 [3, 5, 10, 15, 1020, 50, 315, 420]
3 [3, 5, 10, 15, 50, 315, 420, 1020]
*/

// inneficient ??
export function digitCount2(number) {}

export function getDigit2(number, place = 1) {
  const textNumber = number.toString();
  return textNumber[textNumber.length - place] || 0;
}

// Negaqtive Numebrs??/
export function mostDigits2(array) {
  const maxNumber = array.reduce((acc, number) => Math.max(acc, number), 0);
  return digitCount(maxNumber);
}
