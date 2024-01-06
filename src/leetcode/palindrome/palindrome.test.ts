import { isPalindrome, isPalindrome2 } from './palindrome';

describe('Is Palindrome', () => {

  describe('GIVEN the string "A man, a plan, a canal: Panama"', () => {
    const string = 'A man, a plan, a canal: Panama';
    test('THEN it should return true', () => {
      expect(isPalindrome(string)).toBe(true);
    });
  });

  describe('GIVEN the string "race a car"', () => {
    const string = 'race a car';
    test('THEN it should return false', () => {
      expect(isPalindrome(string)).toBe(false);
    });
  });

  describe('GIVEN the string " "', () => {
    const string = ' ';
    test('THEN it should return true', () => {
      expect(isPalindrome(string)).toBe(true);
    });
  });
});


describe('Is Palindrome (Alternative Solution)', () => {
  describe('GIVEN the string "A man, a plan, a canal: Panama"', () => {
    const string = 'A man, a plan, a canal: Panama';
    test('THEN it should return true', () => {
      expect(isPalindrome2(string)).toBe(true);
    });
  });

  describe('GIVEN the string "race a car"', () => {
    const string = 'race a car';
    test('THEN it should return false', () => {
      expect(isPalindrome2(string)).toBe(false);
    });
  });

  describe('GIVEN the string " "', () => {
    const string = ' ';
    test('THEN it should return true', () => {
      expect(isPalindrome2(string)).toBe(true);
    });
  });
});