/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 * Constraints:
 * 1 <= s.length, t.length <= 5 * 104
 * s and t consist of lowercase English letters.
 */
export function isAnagram(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) {
    return false;
  }

  const occurrences = new Map<string, number>();

  for (const char of string1) {
    const charOccurrence = occurrences.get(char) || 0;
    occurrences.set(char, charOccurrence + 1);
  }

  for (const char of string2) {
    const charOccurrence = occurrences.get(char) || 0;
    if (charOccurrence <= 0) {
      return false;
    }
    occurrences.set(char, charOccurrence - 1);
  }

  return true;
}