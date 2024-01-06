/**
 * [383. Ransom Note](https://leetcode.com/problems/ransom-note/)
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 * Constraints:
 *   ransomNote and magazine consist of lowercase English letters.
 *   1 <= ransomNote.length, magazine.length <= 105
 */

/**
 * Solution: Frequency Counter
 * Time complexity: O(n + m)
 * Where n is the length of magazine and m the number of unique characters in ransomNote
 */
export function canConstruct(ransomNote: string, magazine: string): boolean {
  if(ransomNote.length > magazine.length) return false;

  const ransomNoteFrequency = new Map<string, number>();
  const magazineFrequency = new Map<string, number>();

  for(let i = 0; i < magazine.length; i++ ) {
    const magazineLetter = magazine[i];
    magazineFrequency.set(magazineLetter, (magazineFrequency.get(magazineLetter) || 0) + 1);

    if(i < ransomNote.length) {
      const ransomNoteLetter = ransomNote[i];
      ransomNoteFrequency.set(ransomNoteLetter, (ransomNoteFrequency.get(ransomNoteLetter) || 0) + 1);
    }
  }

  for (const [key, value] of ransomNoteFrequency.entries()) {
    const magazineFrequencyValue = magazineFrequency.get(key);
    if(!magazineFrequencyValue || magazineFrequencyValue < value) {
      return false;
    }
  }

  return true;

}