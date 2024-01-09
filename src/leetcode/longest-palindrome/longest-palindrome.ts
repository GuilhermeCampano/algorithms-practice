/**
 * [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 * 
 * Solution:
 * 1. Use HashMap to store the frequency of each character
 * 2. Iterate through the HashMap and add the frequency of each character to the result
 * 3. If the frequency of a character is even, add it to the result
 * 4. If the frequency of a character is odd, add it to the result and subtract 1 from the frequency
 * 
*/

export function longestPalindrome(text: string): number {
  if (text.length <= 1) return text.length;
  const frequencyMap = buildFrequencyMap(text);
  return calculateLongestPalindrome(frequencyMap);
}

function buildFrequencyMap(s: string): Map<string, number> {
  const frequencyMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charFrequency = frequencyMap.get(char) || 0;
    frequencyMap.set(char, charFrequency + 1);
  }

  return frequencyMap;
}

function calculateLongestPalindrome(frequencyMap: Map<string, number>): number {
  let longestPalindrome = 0;
  let hasOddFrequency = false;

  frequencyMap.forEach((frequency: number) => {
    longestPalindrome += frequency;
    if (frequency % 2 === 1) {
      longestPalindrome -= 1;
      hasOddFrequency = true;
    }
  });

  if (hasOddFrequency) {
    longestPalindrome += 1;
  }

  return longestPalindrome;
}

/**
 * Debug:
 * abccccdd
 * a: 1
 * b: 1
 * c: 4
 * d: 2
 * 
 * 2 + 4 = 6 + 1 (odd frequency) = 7
 */