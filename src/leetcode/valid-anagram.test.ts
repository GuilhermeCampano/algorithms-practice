
import {isAnagram} from './valid-anagram';

describe('Valid Anagram', () => {
  describe('GIVEN the strings "anagram" and "nagaram"', () => {
    test('THEN it should return true', () => {
      expect(isAnagram('anagram', 'nagaram')).toBe(true);
    });
  });

  describe('GIVEN the string "debit card" and "bad credit"', () => {
    it('THEN it should return true', () => {
      expect(isAnagram('debit card', 'bad credit')).toBe(true);
    });
  });

  describe('GIVEN the strings "rat" and "car"', () => {
    it('THEN it should return false', () => {
      expect(isAnagram('rat', 'car')).toBe(false);
    });
  });
});