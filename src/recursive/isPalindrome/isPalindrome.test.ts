import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  it('should return true if the string is a palindrome', () => {
    expect(isPalindrome('ana')).toBe(true);
  });
  it('should return false if the string is not a palindrome', () => {
    expect(isPalindrome('test')).toBe(false);
  });
});
