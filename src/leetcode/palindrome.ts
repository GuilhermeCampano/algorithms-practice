
/**
 * 125. Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 * Solution: Multiple Pointers
 * Time complexity: O(n/2) => O(n)
 */
export function isPalindrome(text: string): boolean {
  if(text.length === 0) return true;
  const parsedString = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = parsedString.length - 1;

  while(left < right) {
    if(parsedString[left] !== parsedString[right]) return false;
    left++;
    right--;
  }
  return true;
}

function isAlphanumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || // numeric (0-9)
         (code >= 65 && code <= 90) || // upper alpha (A-Z)
         (code >= 97 && code <= 122);  // lower alpha (a-z)
}

export function isPalindrome2(text: string): boolean {
  let left = 0;
  let right = text.length - 1;

  while(left < right) {
    while(left < right && !isAlphanumeric(text[left])) {
      left++;
    }
    while(left < right && !isAlphanumeric(text[right])) {
      right--;
    }
    if(text[left].toLowerCase() !== text[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
}
