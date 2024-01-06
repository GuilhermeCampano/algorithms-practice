/**
 * Problem:  The function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 * Problem Solving Patterns: Multiple Pointers
 */
export function isSubsequence(string1: string, string2: string): boolean {
  if (!string1) {
    return true;
  }

  let startPointer = 0;
  let endPointer = 0;
  while (endPointer < string2.length) {
    if (string2[endPointer] === string1[startPointer]) {
      startPointer++;
    }
    if (startPointer === string1.length) {
      return true;
    }
    endPointer++;
  }
  return false;
}
