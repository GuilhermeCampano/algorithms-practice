/**
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first
*/
export function anagram(string1: string, string2: string) {
  if (string1.length !== string2.length) {
    return false;
  }
  const occurances = {};
  for (let i = 0; i < string1.length; i++) {
    const char = string1[i];
    occurances[char] = occurances[char] ? (occurances[char] += 1) : 1;
  }

  for (let i = 0; i < string2.length; i++) {
    const char = string2[i];
    if (!occurances[char]) {
      return false;
    } else {
      occurances[char] -= 1;
    }
  }
  return true;
}
