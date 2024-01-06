import { canConstruct } from './ransom-note';
describe('Ransom Note', () => {

  it('should return false if ransomNote is "a" and magazine is "b"', () => {
    expect(canConstruct('a', 'b')).toBeFalsy();
  });

  it('should return false if ransomNote is "aa" and magazine is "ab"', () => {
    expect(canConstruct('aa', 'ab')).toBeFalsy();
  });

  it('should return true if ransomNote is "aa" and magazine is "aab"', () => {
    expect(canConstruct('aa', 'aab')).toBeTruthy();
  });

  it('should return true if ransomNote is "bg" and magazine is "bghhhhhhbghhhhhhhh"', () => {
    expect(canConstruct('bg', 'hhhhhhbghhhhhhhh')).toBeTruthy();
  });

  it('should return false if ransomNote is "abbbcc" and magazine is "abbfffff"', () => {
    expect(canConstruct('abbbcc', 'abbfffff')).toBeFalsy();
  });
});