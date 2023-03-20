export function isSubsequence(string1, string2) {
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
