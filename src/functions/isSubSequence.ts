/**
 * Takes in two strings and checks whether the characters in the first string form
 * a subsequence of characters in the second string
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
