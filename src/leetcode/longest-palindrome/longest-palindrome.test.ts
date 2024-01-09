import {longestPalindrome} from './longest-palindrome';

describe('Longest Palindrome', () => {
  it('should return 7 for abccccdd', () => {
    expect(longestPalindrome('abccccdd')).toBe(7);
  });
  
  it('should return 1 for a', () => {
    expect(longestPalindrome('a')).toBe(1);
  });

  it('should return 2 for bb', () => {
    expect(longestPalindrome('bb')).toBe(2);
  });

  it('should return 1 for AB', () => {
    expect(longestPalindrome('AB')).toBe(1);
  });
});