/* 
  [67. Add Binary](https://leetcode.com/problems/add-binary/)
  Given two binary strings a and b, return their sum as a binary string.

  binary representation from 0 to 11
  0, 1, 2,  3,  4,   5,   6,    7,    8,     9,   10,   11
  0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010, 1011

  The sum of two binary numbers can carry over to the next digit.
  For example, 1 + 1 = 10 in binary, which is 2 in decimal.
*/

export function addBinary(a: string, b: string): string {
  const lengthOfA = a.length;
  const lengthOfB = b.length;
  let carryOver = 0;
  let binarySum = '';

  for (let i = 0; i < Math.max(lengthOfA, lengthOfB); i++) {
    // Get the i-th digit from the end of a and b. If there's no such digit, use 0.
    const digitOfA = lengthOfA - 1 - i >= 0 ? parseInt(a[lengthOfA - 1 - i]) : 0;
    const digitOfB = lengthOfB - 1 - i >= 0 ? parseInt(b[lengthOfB - 1 - i]) : 0;

    // Calculate the sum of the two digits and the carry over from the previous step
    const digitSum = digitOfA + digitOfB + carryOver;

    // Update the carry over for the next step
    carryOver = Math.floor(digitSum / 2);

    // Prepend the remainder of the sum to the binary sum
    binarySum = `${digitSum % 2}${binarySum}`;
  }

  // If there's a carry over left after the last step, prepend it to the binary sum
  if (carryOver) {
    binarySum = `${carryOver}${binarySum}`;
  }

  // Return the binary sum
  return binarySum;
}

/* 
  Couldn't resist... 😅 
  On a serious note:
  BigInt allows for representation of numbers larger than 2^53 - 1, the maximum safe integer in JavaScript.
  The "0b" prefix is used for binary literals.
*/
export function lazySolution(a: string, b: string): string {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
}