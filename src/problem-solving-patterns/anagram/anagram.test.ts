import {anagram} from './anagram';

describe('anagram', () => {
  it('should return true if string1 and string2 are anagrams', () => {
    expect(anagram('anagram', 'nagaram')).toBeTruthy();
  });
  it('should return false if string1 and string2 are not anagrams', () => {
    expect(anagram('rat', 'car')).toBeFalsy();
  });
});
