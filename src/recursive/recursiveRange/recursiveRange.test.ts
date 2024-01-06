import { recursiveRange } from './recursiveRange';

describe('recursiveRange', () => {
  it('should return the sum of all numbers from 0 to the number passed to the function', () => {
    expect(recursiveRange(6)).toBe(21);
  });
  it('should return the sum of all numbers from 0 to the number passed to the function', () => {
    expect(recursiveRange(10)).toBe(55);
  });
});
