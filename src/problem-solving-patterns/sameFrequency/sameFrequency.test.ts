import { sameFrequency } from './sameFrequency';

describe('sameFrequency', () => {
  it('should return true if number1 and number2 have the same frequency of digits', () => {
    expect(sameFrequency(182, 281)).toBeTruthy();
  });
  it('should return false if number1 and number2 do not have the same frequency of digits', () => {
    expect(sameFrequency(34, 14)).toBeFalsy();
  });
});