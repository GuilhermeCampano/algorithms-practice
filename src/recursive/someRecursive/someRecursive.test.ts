import { someRecursive } from './someRecursive';

describe('someRecursive', () => {
  it('should return true if a single value in the array returns true', () => {
    const isOdd = (val: number) => val % 2 !== 0;
    expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
  });

  it('should return true if a single value in the array returns true', () => {
    const greaterThan10 = (val: number) => val > 10;
    expect(someRecursive([2,4,10, 20], greaterThan10)).toBe(true);
  });
});
